const express = require("express");
const pool = require("./config/db");

const app = express();

app.use(express.json());

pool.query("SELECT NOW()")
    .then(result => {
        console.log("Database Connected");
        console.log(result.rows[0]);
    })
    .catch(err => {
        console.log(err);
    });

app.listen(3000, () => {
    console.log("Server running on port 3000");
}); 