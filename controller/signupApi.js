const signUpModel = require("../model/signUpSchema")
const bcrypt = require("bcrypt")
async function hash(password){
    return await bcrypt.hash(password,10)
}
const comparePassword = async(password,oldpassword)=>{
    return await bcrypt.compare(password,oldpassword)
}

const signUp = async(req,res)=>{
    try {
        const {mobile,password} = req.body
        
        const data = await signUpModel.findOne({mobile:req.body.mobile})
        const hashed = await hash(password)
        
        if(!data){
            const newdata = await signUpModel({
                mobile:mobile,
                password:hashed
            })
            const count = await signUpModel.countDocuments();        
        if (count >= 5) {
          return res.status(403).json({ message: 'Registration limit reached' });
        }
            await newdata.save()
            return res.json({message:"data has been registered",newdata:newdata})
        }
       
        else{
            const verifyPassword = await comparePassword(password,data.password)
            if(!verifyPassword){
                return res.json({message:"password incorrect"})
            }else{
                return res.json({message:"sign in successfull"})
            }
        }
        
    } catch (error) {
        console.log("error>>",error);
    }
}

module.exports ={signUp}