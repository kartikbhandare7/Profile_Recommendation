const itemService = require("../services/itemService");

async function getAllItems(req, res) {
    try {
        const items = await itemService.getAllItems();

        res.status(200).json({
            success: true,
            count: items.length,
            data: items
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch items."
        });
    }
}

module.exports = {
    getAllItems
};