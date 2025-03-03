//here we are defining the parameters that we need to ask for in table or  what data we need to store

const mongoose=require('mongoose')//import mongodb model
//creating table
const credential=mongoose.Schema({
// defining fields
username:{type:String,require:true},//column name usrname datatype-string and is should be filled to require is true
email:{type:String,require:true},
password:{type:String,require:true}
})
//every model should be exported in backend otherwise it wont work
module.exports=mongoose.model('User',credential)

