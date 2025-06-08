import { Router } from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController";
import { authenticate } from "../middleware/auth";
import { validate, productValidationSchema } from "../middleware/validation";

const router = Router();

router.post(
  "/",
  authenticate,
  validate(productValidationSchema),
  createProduct
);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", authenticate, updateProduct);
router.delete("/:id", authenticate, deleteProduct);

export default router;
