import db from "../config/db.js";

// 1️⃣ Get all schemes
export const getAllSchemes = (req, res) => {
  db.query("SELECT * FROM schemes", (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

// 2️⃣ Get scheme by ID
export const getSchemeById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM schemes WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
};

// 3️⃣ Add new scheme
export const addScheme = (req, res) => {
  const { name, description, budget, progress, start_date, end_date, status } = req.body;
  const sql =
    "INSERT INTO schemes (name, description, budget, progress, start_date, end_date, status) VALUES (?, ?, ?, ?, ?, ?, ?)";
  db.query(sql, [name, description, budget, progress, start_date, end_date, status], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "✅ Scheme added successfully!" });
  });
};

// 4️⃣ Update a scheme
export const updateScheme = (req, res) => {
  const { id } = req.params;
  const { name, description, budget, progress, start_date, end_date, status } = req.body;
  const sql =
    "UPDATE schemes SET name=?, description=?, budget=?, progress=?, start_date=?, end_date=?, status=? WHERE id=?";
  db.query(sql, [name, description, budget, progress, start_date, end_date, status, id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "✅ Scheme updated successfully!" });
  });
};

// 5️⃣ Delete a scheme
export const deleteScheme = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM schemes WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "🗑️ Scheme deleted successfully!" });
  });
};
