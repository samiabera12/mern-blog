import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
export const signup =async(req, res) => {
    const { username, email,password } = req.body;

    // Validation logic
    if (!username || !email || !password || username==='' || email ==='' || password ==='' ) {
        return res.status(400).json({ error: 'Username , email and password are required' });
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
    res.status(500).json({ message: error.message});
}

};  