import bcrypt from "bcryptjs";
import { BudgetUser}  from "../../models/userModel.js";
import jwt from "jsonwebtoken";
export const userLogin = async(req,res) =>{
    try {
        const { email , password } = req.body;
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:'All fields are required.'
            })
        }

        const userExists = await BudgetUser.findOne({email});
        if(!userExists){
            return res.status(400).json({
                success:false,
                message:'Email or password is incorrect.'
            });
        }

        //Check password is correct or not
        const matchPassword = await bcrypt.compare(password,userExists.password);
        if(!matchPassword){
            return res.status(400).json({
                success:false,
                message:'Email or password is incorrect.'
            });
        }

        userExists.password = undefined;

        //Create token data
        const tokenData = {
            id:userExists.id,
            email:userExists.email
        }

        const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET_KEY,{
            expiresIn : "2d"
        });


        //Add token into cookies

        res.cookie('token',token,{
            httpOnly:true,
            secure:true,
            maxAge : 5 * 24 * 60 * 60 * 1000
        });

        res.status(200).json({
            success:true,
            message:'User loggedIn successfully',
            userExists,
            token
        });
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

        const userExist = await BudgetUser.findOne({email});
        if(userExist){
            return res.status(400).json({
                success:false,
                message:'User already exists.'
            })
        }

        //Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const user = await BudgetUser.create({
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