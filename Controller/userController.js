import csv from "csvtojson"
import userModel from "../DB/models/User.js"
const importUser = async (req,res)=>{
    try {
        let userData=[]
        csv()
        .fromFile(req.file.path)
        .then(async(response)=>{
            for (let x = 0; x < response.length; x++) {
                userData.push({
                    name : response[x].Name,
                    email: response[x].Email,
                    mobile:response[x].Mobile
            }) ;
            }
            await userModel.insertMany(userData)
            console.log(response);
        })
        res.send({
            status:200, 
            success:true,
            msg:"CSV Imported"
        })
    } catch (error) {
        res.send({
            status:400, 
            success:false,
            msg:error.message
        })
    }
}

export default importUser