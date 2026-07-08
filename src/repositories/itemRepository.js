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



async function getItemById(id) {
    const query = `
        SELECT *
        FROM items
        WHERE id = $1
        AND is_active = TRUE;
    `;

    const result = await pool.query(query, [id]);

    return result.rows[0];
}

async function createItem(item) {
    const query = `
        INSERT INTO items(
            title,
            description,
            category,
            min_age,
            max_age,
            min_experience,
            required_skills,
            location,
            salary
        )
        VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)
        RETURNING *;
    `;

    const values = [
        item.title,
        item.description,
        item.category,
        item.min_age,
        item.max_age,
        item.min_experience,
        item.required_skills,
        item.location,
        item.salary
    ];

    const result = await pool.query(query, values);

    return result.rows[0];
}

async function updateItem(id, item) {
    const query = `
        UPDATE items
        SET
            title = $1,
            description = $2,
            category = $3,
            min_age = $4,
            max_age = $5,
            min_experience = $6,
            required_skills = $7,
            location = $8,
            salary = $9,
            updated_at = CURRENT_TIMESTAMP
        WHERE id = $10
        RETURNING *;
    `;

    const values = [
        item.title,
        item.description,
        item.category,
        item.min_age,
        item.max_age,
        item.min_experience,
        item.required_skills,
        item.location,
        item.salary,
        id
    ];

    const result = await pool.query(query, values);

    return result.rows[0];
}

async function deleteItem(id) {
    const query = `
        UPDATE items
        SET
            is_active = FALSE,
            updated_at = CURRENT_TIMESTAMP
        WHERE id = $1
        RETURNING *;
    `;

    const result = await pool.query(query, [id]);

    return result.rows[0];
}

module.exports = {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem
};