import React, { useEffect, useState } from "react";
import SchemeTable from "./components/SchemeTable";
import SchemeForm from "./components/SchemeForm";
import FeedbackForm from "./components/FeedbackForm";
import API from "./api";

function App() {
  const [schemes, setSchemes] = useState([]);
  const [selectedScheme, setSelectedScheme] = useState(null);

  const fetchSchemes = async () => {
    const res = await API.get("/schemes");
    setSchemes(res.data);
  };

  const addScheme = async (scheme) => {
    await API.post("/schemes", scheme);
    fetchSchemes();
  };

  const updateScheme = async (id, updated) => {
    await API.put(`/schemes/${id}`, updated);
    fetchSchemes();
  };

  const deleteScheme = async (id) => {
    await API.delete(`/schemes/${id}`);
    fetchSchemes();
  };

  useEffect(() => {
    fetchSchemes();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>📊 MHRD Dashboard (React + Node + MySQL + MongoDB)</h2>

      {/* 🟢 MySQL Schemes Section */}
      <SchemeForm
        onAdd={addScheme}
        onUpdate={updateScheme}
        selectedScheme={selectedScheme}
        clearSelection={() => setSelectedScheme(null)}
      />
      <SchemeTable
        schemes={schemes}
        onEdit={setSelectedScheme}
        onDelete={deleteScheme}
      />

      {/* 🟣 MongoDB Feedback Section */}
      <FeedbackForm />
    </div>
  );
}

export default App;
