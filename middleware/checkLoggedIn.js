import jwt from 'jsonwebtoken';

export const loggedIn = async(req,res,next) =>{
    try {
        const {token} = req.cookies;
        if(!token){
            return res.status(400).json({
                success:false,
                message:'Failed to find token in the cookies.'
            })
        }

        const data = await jwt.verify(token,process.env.TOKEN_SECRET_KEY);

        req.user = data;
        next();
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : error.message
        })
    }
}