const mongoose = require('mongoose');
require("dotenv").config({path:".env"})

// const connectionString =process.env.MONGO_URI;
//
// mongoose.connect(connectionString, { useNewUrlParser: true }).catch((e) => {
//     console.error('Connection error', e.message);
// });

// const db = mongoose.connection;
const db =async()=>{
    const opts={
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
        try{
           await mongoose.connect("mongodb+srv://root:root@atlascluster.xlj7e.mongodb.net/rnp?retryWrites=true&w=majority",opts)
            console.log("Database is connected")
        }catch(e){
            console.log(e.message)
        }
}
module.exports = db;