const pool = require("../config/db");

async function getActiveJobs(){

    const query = `
        SELECT *
        FROM items
        WHERE is_active = TRUE;
    `;

    const result = await pool.query(query);

    return result.rows;

}

module.exports={
    getActiveJobs
};