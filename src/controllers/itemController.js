const itemService = require("../services/itemService");

//GET
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

//GET 
async function getItemById(req,res){

    try{

        const item = await itemService.getItemById(req.params.id);

        if(!item){
            return res.status(404).json({
                success:false,
                message:"Item not found"
            });
        }

        res.status(200).json({
            success:true,
            data:item
        });

    }catch(err){

        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        });

    }

}

//POST
async function createItem(req,res){

    try{

        const item = await itemService.createItem(req.body);

        res.status(201).json({
            success:true,
            data:item
        });

    }catch(err){

        res.status(500).json({
            success:false,
            message:"Failed to create item"
        });

    }

}

//PUT
async function updateItem(req,res){

    try{

        const item = await itemService.updateItem(req.params.id,req.body);

        if(!item){

            return res.status(404).json({
                success:false,
                message:"Item not found"
            });

        }

        res.json({
            success:true,
            data:item
        });

    }catch(err){

        res.status(500).json({
            success:false,
            message:"Update failed"
        });

    }

}


//DELETE
async function deleteItem(req,res){

    try{

        const item = await itemService.deleteItem(req.params.id);

        if(!item){

            return res.status(404).json({
                success:false,
                message:"Item not found"
            });

        }

        res.json({
            success:true,
            message:"Item deleted successfully"
        });

    }catch(err){

        res.status(500).json({
            success:false,
            message:"Delete failed"
        });

    }

}
module.exports = {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem
};