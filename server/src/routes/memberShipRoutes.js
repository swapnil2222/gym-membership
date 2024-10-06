import express from "express";
import {
  createMemberShip,
  deleteMemberShipById,
  getMemberShipById,
  getMemberShips,
  updateMemberShipById,
} from "../controllers/memberShipsControllers.js";

const router = express.Router();

router.route("/").get(getMemberShips).post(createMemberShip);
router
  .route("/:id")
  .get(getMemberShipById)
  .put(updateMemberShipById)
  .delete(deleteMemberShipById);

export default router;
