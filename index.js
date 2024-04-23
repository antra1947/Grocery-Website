const express = require('express');
const app = express();
const path = require('path');
const collection=require('./mongodb');
const port=4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
app.use(express.static(path.join(__dirname, '/')));

app.get("/submit", (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});
app.get("/email", (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});
// Define the user schema
app.post("/submit",async(req,res)=>{
    const data={
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        message:req.body.message,
        email:req.body.email
        
    }
await collection.insertMany([data])
// res.sendFile(path.join(__dirname, 'index.html'));
res.redirect('/submit?success=true');

})
// app.post("/email",async(req,res)=>{
//     const data={
//         email:req.body.email,
        
        
//     }
// await collection.insertMany([data])
// // res.sendFile(path.join(__dirname, 'index.html'));
// res.redirect('/submit?success=true');

// })

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
