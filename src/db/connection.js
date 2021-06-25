const mongoose = require('mongoose');
//connecting with mongodb atlas remote database
mongoose.connect("mongodb://localhost:27017/customerApi",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((e)=>{

    console.log("connection succefull with database");
}).catch((e)=>{
    console.log(e);
})