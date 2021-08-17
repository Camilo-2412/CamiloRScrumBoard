const User = require("../models/user");
const bcrypt = require("bcrypt");

const login= async(req,res) =>{
    let user = await User.findOne({email : req.body.email});
    if(!user) return res.status(400).send("Incorrect email or pssword");

    const hash = await bcrypt.compare(req.body.password, user.password);
    if(!hash) return res.status(400).send("Incorrect email or pssword");

    try {
        const jwtToken = user.generateJWT();
        return res.status(200).send({jwtToken})
    } catch (e) {
        return res.status(400).send("login error;")
    }
};

module.exports= {login};