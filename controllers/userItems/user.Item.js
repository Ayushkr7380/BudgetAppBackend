import Expenditure from "../../models/expenditure.js";

export const userItem = async(req,res) =>{
    try {
        const { itemname , price } = req.body;    
        if(!itemname || !price){
            return res.status(400).json({
                success:false,
                message:'All fields are required.'
            });
        }    

        const expenditure = await Expenditure();

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