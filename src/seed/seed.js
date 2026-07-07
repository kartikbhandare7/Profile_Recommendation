const pool = require("../config/db");
const jobs = require("./jobs");

async function seedDatabase() {
    try {
        console.log("Seeding database...");

        // Remove existing data and reset IDs
        await pool.query("TRUNCATE TABLE items RESTART IDENTITY;");

        for (const job of jobs) {
            await pool.query(
                `INSERT INTO items (
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
                VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
                [
                    job.title,
                    job.description,
                    job.category,
                    job.min_age,
                    job.max_age,
                    job.min_experience,
                    job.required_skills,
                    job.location,
                    job.salary
                ]
            );
        }

        console.log(`${jobs.length} jobs inserted successfully!`);
    } catch (error) {
        console.error("Error while seeding database:");
        console.error(error);
    } finally {
        await pool.end();
    }
}

seedDatabase();