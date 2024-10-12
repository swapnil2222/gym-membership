import express from "express";
import {
  createPackage,
  deletePackageById,
  getPackageById,
  getPackages,
  updatePackageById,
} from "../controllers/packagesControllers.js";

const router = express.Router();

router.route("/").get(getPackages).post(createPackage);
router
  .route("/:id")
  .get(getPackageById)
  .put(updatePackageById)
  .delete(deletePackageById);

export default router;
