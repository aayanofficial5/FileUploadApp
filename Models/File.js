const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  // write data structure of schema
  name: {
    type: String,
    required: true
  },
  imageUrl:{
    type:String,
  },
  tags:{
    type:String,
  },
  email:{
    type:String,
    required:true
  } 
})

module.exports = mongoose.model("File",fileSchema);