const User = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

//register

exports.register =async(req,res) => {
    const {name,email,password} = req.body;
    try {
        const hashedpassword = await bcrypt.hash(password,10);
        const user = await User.create({name,email,password:hashedpassword});
        res.status(201).json({message:"user registered"});
    }catch(err) {
        res.status(400).json(err);
    }
}

//login

exports.login =async(req,res) => {
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user) return  res.status(401).json({message:"invalid credential"});

        const match = await bcrypt.compare(password,user.password);
        if(!match) return  res.status(401).json({message:"invalid credential"});

        const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:"30d"});
        res.json({token});
    }catch(err) {
        res.status(400).json(err);
    }
}