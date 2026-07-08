const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const repository = require("../repositories/adminRepository");

async function login(username,password){

    const admin = await repository.findByUsername(username);

    if(!admin){

        throw new Error("Invalid credentials");

    }

    const valid = await bcrypt.compare(
        password,
        admin.password
    );

    if(!valid){

        throw new Error("Invalid credentials");

    }

    return jwt.sign(

        {
            id:admin.id,
            username:admin.username
        },

        process.env.JWT_SECRET,

        {
            expiresIn:"2h"
        }

    );

}

module.exports={
    login
};