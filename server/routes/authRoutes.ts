import express from "express";
import {
  login,
  generateQRImage,
  set2FA,
  checkSession,
  logout,
} from "../controllers/authController";

const router = express.Router();

router.get("/login", login);
router.get("/qrImage", generateQRImage);
router.get("/set2FA", set2FA);
router.get("/check", checkSession);
router.get("/logout", logout);

export default router;
