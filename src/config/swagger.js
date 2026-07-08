const swaggerJsDoc = require("swagger-jsdoc");

const options = {
    definition: {
    openapi: "3.0.0",
    info: {
        title: "Profile Recommendation API",
        version: "1.0.0",
        description: "REST API for recommending jobs"
    },
    servers: [
        {
            url: "http://localhost:3000"
        }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT"
            }
        }
    }
},

    apis: ["./src/routes/*.js"]
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;