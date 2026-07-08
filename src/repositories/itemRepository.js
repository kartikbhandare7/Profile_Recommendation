const pool = require("../config/db");

async function getAllItems() {
    const query = `
        SELECT *
        FROM items
        WHERE is_active = TRUE
        ORDER BY id;
    `;

    const result = await pool.query(query);

    return result.rows;
}

module.exports = {
    getAllItems
};