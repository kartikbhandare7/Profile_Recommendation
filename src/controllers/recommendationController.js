const recommendationService = require("../services/recommendationService");

async function recommend(req, res) {

    try {

        const {
            age,
            experience,
            skills,
            location,
            preferredCategory,
            salaryExpectation
        } = req.body;

        // Validation
        if (
            age === undefined ||
            experience === undefined ||
            !Array.isArray(skills) ||
            skills.length === 0 ||
            !location ||
            !preferredCategory ||
            salaryExpectation === undefined
        ) {
            return res.status(400).json({
                success: false,
                message: "Missing or invalid required fields."
            });
        }

        const recommendations = await recommendationService.recommend(req.body);

        return res.status(200).json({
            success: true,
            recommendations
        });

    } catch (err) {

        console.error(err);

        return res.status(500).json({
            success: false,
            message: "Recommendation failed."
        });

    }

}


async function explainItem(req, res) {
    try {

        const explanation = await recommendationService.explainItem(req.params.id);

        res.status(200).json({
            success: true,
            data: explanation
        });

    } catch (error) {

        res.status(404).json({
            success: false,
            message: error.message
        });

    }
}

module.exports={
    recommend,
    explainItem
};