const pool = require("../config/db");

async function findByUsername(username) {

    const result = await pool.query(
        "SELECT * FROM admin_users WHERE username=$1",
        [username]
    );

    return result.rows[0];

}

module.exports = {
    findByUsername
};