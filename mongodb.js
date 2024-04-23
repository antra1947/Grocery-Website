const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://antra1947:antra04@cluster0.57wemrr.mongodb.net/")
.then(()=>{
    console.log("mongo connected");
})
.catch(()=>{
    console.log("failed to connect");
})
const LogInSchema=new mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }
   
})
const collection=new mongoose.model("Collection2",LogInSchema);



module.exports=collection;
