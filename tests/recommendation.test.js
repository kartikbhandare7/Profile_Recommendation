const request = require("supertest");
const app = require("../src/app");

// missing age

test("Should return error when age is missing", async () => {

    const response = await request(app)
        .post("/recommend")
        .send({
            experience: 2,
            skills: ["Java"],
            location: "Pune",
            preferredCategory: "Backend",
            salaryExpectation: 10
        });

    expect(response.statusCode).toBe(400);

});

//missing skills
test("Should return error when skills are missing", async () => {

    const response = await request(app)
        .post("/recommend")
        .send({
            age: 24,
            experience: 2,
            location: "Pune",
            preferredCategory: "Backend",
            salaryExpectation: 10
        });

    expect(response.statusCode).toBe(400);

});

// recommendation with valid profile
test("Should return top recommendations for a valid profile", async () => {

    const response = await request(app)
        .post("/recommend")
        .send({
            age: 24,
            experience: 2,
            skills: ["Java", "Spring Boot", "PostgreSQL"],
            location: "Pune",
            preferredCategory: "Backend",
            salaryExpectation: 10
        });

    expect(response.statusCode).toBe(200);

    expect(response.body.success).toBe(true);

    expect(response.body.recommendations.length).toBeLessThanOrEqual(3);

});

// no jobs available for the profile
test("Should return empty recommendations when no job matches", async () => {

    const response = await request(app)
        .post("/recommend")
        .send({
            age: 18,
            experience: 0,
            skills: ["Cooking"],
            location: "Moon",
            preferredCategory: "Doctor",
            salaryExpectation: 100
        });

    expect(response.statusCode).toBe(200);

    expect(response.body.recommendations.length).toBe(0);

});
// explain item with valid id
test("Should return explanation for a valid item", async () => {

    const response = await request(app)
        .get("/recommend/explain/1");

    expect(response.statusCode).toBe(200);

    expect(response.body.success).toBe(true);

});