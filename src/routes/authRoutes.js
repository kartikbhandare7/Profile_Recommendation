const express = require("express");

const router = express.Router();

const controller = require("../controllers/authController");

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Admin Login
 *     tags:
 *       - Authentication
 *     responses:
 *       200:
 *         description: JWT Token
 */
router.post("/login",controller.login);

module.exports=router;