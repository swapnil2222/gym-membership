import express from "express";

import {
  createGym,
  deleteGymById,
  getGymById,
  getGyms,
  updateGymById,
} from "../controllers/gymsControllers.js";

const router = express.Router();

router.route("/").get(getGyms).post(createGym);
router.route("/:id").get(getGymById).put(updateGymById).delete(deleteGymById);

export default router;
