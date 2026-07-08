const authService = require("../services/authService");

async function login(req,res){

    try{

        const {username,password}=req.body;

        const token = await authService.login(
            username,
            password
        );

        res.json({

            success:true,

            token

        });

    }catch(err){

        res.status(401).json({

            success:false,

            message:err.message

        });

    }

}

module.exports={
    login
};