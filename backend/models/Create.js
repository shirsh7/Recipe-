const mongoose=require('mongoose')
const entry=mongoose.Schema({
// defining fields
name:{type:String,require:true},//column name usrname datatype-string and is should be filled to require is true
description:{type:String,require:true},
instruction:{type:String,require:true},
cooking_time:{type:Number,require:true},
})
module.exports=mongoose.model('Create',entry)