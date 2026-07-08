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

module.exports={
    recommend
};