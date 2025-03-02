const express=require('express')// Import the Express.js module
const mongoose=require('mongoose')// Import the mongodb module
//env file is used to protect database from hackers by using env we can hide the database link so that hackers cannot access it
require('dotenv').config()//to import the env file to use it here
const User=require('./models/User')//importing user.js to use the table 
const bcrypt=require('bcryptjs')//importing bcryptjs to encrypt the sensitive data
const app=express()// Create an Express application
app.use(express.json());//using middle ware to display msg in json format
const PORT=3000// Define the port number
//to create any api use the same synatx in other words to run anything use this syntax
//there are always two var in it request(req) and responed(res) 
app.get('/',(req,res)=>{
//i want to respond when the api triggered to the home page 
res.send("welcome to mern")
})//call back method
//registration and with post method we always use async methid
app.post('/register',async(req,res)=>{
// to post data to the db we need to use exception handling(try catch block) because here we are modifying the data
//creation of model or schema(table) in user.js file

const{username,email,password}=req.body//inserting/testing the db
try{
const hashedPassword= await bcrypt.hash(password,10)
const value=new User({username,email,password:hashedPassword})
await value.save()
//to check if it stored successfully in db
res.json({message:"User Registered"})
console.log("User Registertation completed..")
}
catch(err){
    console.log(err)
}
})
//login
app.post('/login',async(req,res)=>{
   
    const {email,password}=req.body
    
const user=await User.findOne({email});
if(!user||!(await bcrypt.compare(password,user.password))){
    return res.status(400).json({message:"Invalid Credentials"});
}
res.json({message:"Login successful",username:user.username});
}
catch(err){
    console.log(err)
}
})
mongoose.connect(process.env.MONGO_URL).then(
    ()=>console.log("DB IS CONNECTED")
).catch(
    (err)=>console.log(err)
)

app.listen(PORT,(err)=>{   // Start the server and listen on the specified port
    if(err){ // If an error occurs, log it
        console.log(err)
    }
    console.log("Server is runnning"+ PORT)// Log a success message
})
