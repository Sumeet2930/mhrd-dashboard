import React, { useState, useEffect } from "react";

const initialData = {
  name: "",
  description: "",
  budget: "",
  progress: "",
  start_date: "",
  end_date: "",
  status: ""
};

function SchemeForm({ onAdd, onUpdate, selectedScheme, clearSelection }) {
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    if (selectedScheme) setFormData(selectedScheme);
    else setFormData(initialData);
  }, [selectedScheme]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedScheme) {
      onUpdate(selectedScheme.id, formData);
      clearSelection();
    } else {
      onAdd(formData);
    }
    setFormData(initialData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>{selectedScheme ? "Edit Scheme" : "Add New Scheme"}</h3>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <input name="budget" placeholder="Budget" type="number" value={formData.budget} onChange={handleChange} />
      <input name="progress" placeholder="Progress %" type="number" value={formData.progress} onChange={handleChange} />
      <input name="start_date" placeholder="Start Date" type="date" value={formData.start_date} onChange={handleChange} />
      <input name="end_date" placeholder="End Date" type="date" value={formData.end_date} onChange={handleChange} />
      <input name="status" placeholder="Status" value={formData.status} onChange={handleChange} />
      <button type="submit">{selectedScheme ? "Update" : "Add"}</button>
      {selectedScheme && <button onClick={clearSelection}>Cancel</button>}
    </form>
  );
}

export default SchemeForm;
