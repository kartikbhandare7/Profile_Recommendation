const express = require("express");

const app = express();

const itemRoutes = require("./routes/itemRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");
const authRoutes = require("./routes/authRoutes");

app.use(express.json());

app.use("/items", itemRoutes);
app.use("/recommend", recommendationRoutes);
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;