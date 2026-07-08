const express = require("express");


const router = express.Router();

const recommendationController = require("../controllers/recommendationController");

/**
 * @swagger
 * /recommend:
 *   post:
 *     summary: Recommend top three jobs
 *     tags:
 *       - Recommendation
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               age:
 *                 type: integer
 *               experience:
 *                 type: integer
 *               skills:
 *                 type: array
 *                 items:
 *                   type: string
 *               location:
 *                 type: string
 *               preferredCategory:
 *                 type: string
 *               salaryExpectation:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Top 3 recommendations returned
 */

router.post("/", recommendationController.recommend);

/**
 * @swagger
 * /recommend/explain/{id}:
 *   get:
 *     summary: Explain eligibility of a job
 *     tags:
 *       - Recommendation
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Eligibility explanation
 */
router.get("/explain/:id", recommendationController.explainItem);

module.exports = router;