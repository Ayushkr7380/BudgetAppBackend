import bcrypt from "bcryptjs";
import { User }  from "../../models/userModel.js";
export const userLogin = async(req,res) =>{
    try {
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const userSignUp = async(req,res) =>{
    try {
        const { name , email , password } = req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message:'All fields are required.'
            });
        }

        const userExist = await User.findOne({email});
        if(!userExist){
            return res.status(400).json({
                success:false,
                message:'User already exists.'
            })
        }

        //Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const user = await User.create({
            name,
            email,
            password:hashedPassword
        })

        if(!user){
            return res.status(400).json({
                success:false,
                message:'Failed to signup.'
            });
        }

        res.status(200).json({
            success:true,
            message:'User created successfully.',
            user
        });


    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}