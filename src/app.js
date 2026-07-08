const express = require("express");

const itemRoutes = require("./routes/itemRoutes");

const recommendationRoutes = require("./routes/recommendationRoutes");

app.use("/recommend", recommendationRoutes);

const app = express();

app.use(express.json());

app.use("/items", itemRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});