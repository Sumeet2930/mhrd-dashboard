import express from "express";
import {
  getAllSchemes,
  getSchemeById,
  addScheme,
  updateScheme,
  deleteScheme,
} from "../controllers/schemeController.js";

const router = express.Router();

router.get("/", getAllSchemes);
router.get("/:id", getSchemeById);
router.post("/", addScheme);
router.put("/:id", updateScheme);
router.delete("/:id", deleteScheme);

export default router;
