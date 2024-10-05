import Expenditure from "../../models/expenditureModel.js";

export const userItem = async(req,res) =>{
    try {
        //Get loggedIn user id
        const { id } = req.user;

        //Fetch data from frontend
        const { itemname , price ,date} = req.body;  
        
        //Check the data is fetched or not
        if(!itemname || !price || !date){
            return res.status(400).json({
                success:false,
                message:'All fields are required.'
            });
        }    

        // Find the expenditure for the loggedIn user
        let expenditure = await Expenditure.findOne({ user: id });
        if (!expenditure) {
            // If no expenditure document exists for the user, create a new one
            expenditure = await Expenditure.create({
                user: id,
                datalist: [
                    { 
                        date,
                        data: [
                            { 
                                itemname, 
                                price 
                            }] 
                    }] // Initialize the date with the first item
            });
        } else {
            // Check if the date already exists in the datalist
            const dateEntry = expenditure.datalist.find(entry => entry.date === date);

            if (dateEntry) {
                // If the date exists, push the new item to its data array
                dateEntry.data.push({ itemname, price });
            } else {
                // If the date does not exist, create a new entry with the provided date
                expenditure.datalist.push({
                    date,
                    data: [{ itemname, price }]
                });
            }
        }

        // Save the document
        await expenditure.save();

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