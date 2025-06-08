import { Router } from "express";
import {
  registerUser,
  loginUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController";
import { authenticate, authorize } from "../middleware/auth";
import { validate, userValidationSchema } from "../middleware/validation";

const router = Router();

router.post("/register", validate(userValidationSchema), registerUser);
router.post("/login", loginUser);
router.get("/", authenticate, authorize("admin"), getUsers);
router.get("/:id", authenticate, getUserById);
router.put("/:id", authenticate, updateUser);
router.delete("/:id", authenticate, authorize("admin"), deleteUser);

export default router;
