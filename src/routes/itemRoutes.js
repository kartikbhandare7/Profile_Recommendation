const express = require("express");
const authenticate=require("../middleware/authMiddleware");
const router = express.Router();

const controller = require("../controllers/itemController");

/**
 * @swagger
 * /items:
 *   get:
 *     summary: Get all jobs
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Items
 *     responses:
 *       200:
 *         description: List of jobs
 */
router.get("/",authenticate,controller.getAllItems);

router.get("/:id",authenticate,controller.getItemById);

/**
 * @swagger
 * /items:
 *   post:
 *     summary: Create new job
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Items
 *     responses:
 *       201:
 *         description: Job created
 */
router.post("/",authenticate,controller.createItem);

/**
 * @swagger
 * /items/{id}:
 *   put:
 *     summary: Update job
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Items
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 */
router.put("/:id",authenticate,controller.updateItem);

/**
 * @swagger
 * /items/{id}:
 *   delete:
 *     summary: Delete job
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Items
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 */
router.delete("/:id",authenticate,controller.deleteItem);

module.exports = router;