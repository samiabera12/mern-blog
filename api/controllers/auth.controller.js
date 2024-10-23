import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { errorHandler } from '../utils/error.js'
import jwt from 'jsonwebtoken'
export const signup =async(req, res,next) => {
    const { username, email,password } = req.body;

    // Validation logic
    if (!username || !email || !password || username==='' || email ==='' || password ==='' ) {

        next(errorHandler(400,'All fields are required'));
    }

    // Example response (you will replace this with actual signup logic)
    
const hashedPassword=bcrypt.hashSync(password,10);
const newUser=new User({
    username,
    email,
    password:hashedPassword
});
  
try{
await newUser.save();
res.status(201).json({ message: 'User registered successfully'});
}catch(error){
    next(error);
}

};  
export  const signin=async(req,res,next)=>{

    const {  email,password } = req.body;

    // Validation logic
    if (!email || !password ||  email ==='' || password ==='' ) {

        next(errorHandler(400,'All fields are required'));
    } 

    try{
        const validUser=await User.findOne({email});
        if(!validUser){
            return next(errorHandler(404,'user not found'));
        }
        const validPassword= bcrypt.compareSync(password,validUser.password);
        if(!validPassword){
           return next(errorHandler(400,'invalid password'));
        }
        const token=jwt.sign(
            {id:validUser._id},process.env.JWT_SECRET
        );

        const {password:pass,...rest}=validUser._doc;
        res.status(200).cookie('access_token',token,{
            httpOnly:true,})
            .json(rest);
        

        }catch(error){
            next(error);
        }
} 