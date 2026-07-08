const itemRepository = require("../repositories/itemRepository");

async function getAllItems() {
    return await itemRepository.getAllItems();
}

module.exports = {
    getAllItems
};