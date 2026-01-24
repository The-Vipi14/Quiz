import User from "../models/User.js";

export const Owner_GetAllUsers = async(req ,res)=>{
    try {
        const data = await User.find({role:"user"});
        res.send(data)
      
    } catch (error) {
        console.log(error)
    }
}

export const Owner_GetAllCreator = async(req ,res)=>{
    try {
        const data = await User.find({role:"creator"});
        res.send(data)
      
    } catch (error) {
        console.log(error)
    }
}


