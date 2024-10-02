import mongoose from "mongoose";

const MONGOURI = process.env.MONGOURI;
const connectDB = async() =>{
    try {
        const {connection} = await mongoose.connect(MONGOURI);
        if(!connection){
            console.log(`Failed connection to DB`);
        }
        else{
            console.log(`Connected successfully to database ${connection.host}`);
        } 
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

export default connectDB;