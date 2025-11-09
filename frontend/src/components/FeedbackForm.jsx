import React, { useState, useEffect } from "react";
import axios from "axios";

const FeedbackForm = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Fetch feedbacks
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/feedback")
      .then((res) => setFeedbacks(res.data))
      .catch((err) => console.error("Error fetching feedbacks:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/feedback", formData)
      .then((res) => {
        alert(res.data.message);
        setFormData({ name: "", email: "", message: "" });
        return axios.get("http://localhost:5000/api/feedback");
      })
      .then((res) => setFeedbacks(res.data))
      .catch((err) => console.error("Error submitting feedback:", err));
  };

  return (
    <div style={{ marginTop: "40px", padding: "20px", borderTop: "2px solid #eee" }}>
      <h2>Feedback Section</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Your Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="message"
          placeholder="Your Feedback"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>

      <h3>All Feedbacks</h3>
      <ul>
        {feedbacks.map((f) => (
          <li key={f._id}>
            <b>{f.name}</b> ({f.email}) — {f.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackForm;
