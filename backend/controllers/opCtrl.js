const op = require('../models/op')


getOps= async (req,res)=>{
    const ops= await op.find()
    res.send(ops)
}
module.exports={getOps}