import React from "react";

function SchemeTable({ schemes, onEdit, onDelete }) {
  return (
    <table border="1" width="100%" cellPadding="8">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Budget</th>
          <th>Progress</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {schemes.map((s) => (
          <tr key={s.id}>
            <td>{s.id}</td>
            <td>{s.name}</td>
            <td>{s.budget}</td>
            <td>{s.progress}%</td>
            <td>{s.status}</td>
            <td>
              <button onClick={() => onEdit(s)}>✏️ Edit</button>
              <button onClick={() => onDelete(s.id)}>🗑️ Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SchemeTable;
