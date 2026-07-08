const repository = require("../repositories/itemRepository");

async function getAllItems(){
    return repository.getAllItems();
}

async function getItemById(id){
    return repository.getItemById(id);
}

async function createItem(item){
    return repository.createItem(item);
}

async function updateItem(id,item){
    return repository.updateItem(id,item);
}

async function deleteItem(id){
    return repository.deleteItem(id);
}

module.exports={
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem
};