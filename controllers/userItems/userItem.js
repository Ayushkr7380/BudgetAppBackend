import TestSchema from "../../models/testModel.js";

export const userItems = async(req,res,next) =>{
    try {
        const { id } = req.user;
        const { ExpenditureName , ExpenditureAmount ,ExpenditureDate} = req.body;
        if(!ExpenditureName || !ExpenditureAmount || !ExpenditureDate ){
            return res.status(400).json({
                success:false,
                message:'All fields are required.'
            })
        }

        
            const ExpenditureData = await TestSchema.create({
                user:id,
                ExpenditureName,
                ExpenditureAmount,
                ExpenditureDate
            });

            res.status(200).json({
                success:true,
                message:'Created Successfully.',
                ExpenditureData
            });
        
    } catch (error) {
        console.log(error.message);
    }
}

export const getUserItems = async(req,res) =>{
    try {
        const {id} = req.user;
        const expenditureData = await TestSchema.find({user:id});
        

        // Format the expenditureData to include date as DD-MM-YYYY
        const formattedData = expenditureData.map(item => {
            const date = new Date(item.ExpenditureDate);
            return {
                ...item._doc,
                ExpenditureDate: `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}` // Format the date as DD-MM-YYYY
            };
        });
        res.status(200).json({
            success:true,
            message:'Expenditure data fetched successfully..',
            expenditureData:formattedData
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        });
    }
}

export const deleteUserItem = async(req,res)=>{
    try {
        const { id } = req.body;
        if(!id){
            return res.status(404).json({
                success:false,
                message:'Item id not found.'
            })
        }

        const item = await TestSchema.findByIdAndDelete({_id:id});
        if(!item){
            return res.status(400).json({
                success:false,
                message:'Failed to delete item.'
            });
        }

        res.status(200).json({
            success:true,
            message : 'deleted successfully',
            item
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        });
    }
}

export const updateUserItem = (req,res)=>{
    try {
        
    } catch (error) {
        
    }
}