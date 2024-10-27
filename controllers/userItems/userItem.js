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