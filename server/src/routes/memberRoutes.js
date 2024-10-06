import express from "express";
import {
  createMember,
  deleteMemberById,
  getMemberById,
  getMembers,
  updateMemberById,
} from "../controllers/membersControllers.js";

const router = express.Router();

router.route("/").get(getMembers).post(createMember);
router
  .route("/:id")
  .get(getMemberById)
  .put(updateMemberById)
  .delete(deleteMemberById);

export default router;
