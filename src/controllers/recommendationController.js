const recommendationService = require("../services/recommendationService");

async function recommend(req,res){

    try{

        const recommendations = await recommendationService.recommend(req.body);

        res.status(200).json({
            success:true,
            recommendations
        });

    }catch(err){

        console.error(err);

        res.status(500).json({
            success:false,
            message:"Recommendation failed"
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