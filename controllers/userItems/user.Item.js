import Expenditure from "../../models/expenditure.js";

export const userItem = async(req,res) =>{
    try {
        const { id } = req.user;
        const { itemname , price } = req.body;    
        if(!itemname || !price){
            return res.status(400).json({
                success:false,
                message:'All fields are required.'
            });
        }    

        const expenditure = await Expenditure.findOneAndUpdate(
            { user: id },
            {
                $push: {
                    "datalist.data": {
                        itemname,
                        price
                    }
                }
            },
            { 
                new: true, // Return the updated document
                upsert: true, // Create a new document if none exists
                useFindAndModify: false // Avoid deprecation warning
            }
        );

        if(!expenditure){
            return res.status(400).json({
                success:false,
                message:'Failed to save in database.'
            })
        }

        res.status(200).json({
            success:true,
            message:'All OkK',
            expenditure
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}