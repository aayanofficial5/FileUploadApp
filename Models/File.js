const mongoose = require("mongoose");
const { createTransporter } = require("../Config/email");
require('dotenv').config();

// create a schema
const fileSchema = new mongoose.Schema({
  // write data structure of schema
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  videoUrl: {
    type: String,
  },
  tags: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
});

fileSchema.post("save", async (doc) => {
  try {

    //create a  transporter
    
    let transporter = createTransporter();

    // send a mail over transporter
    
    const info = await transporter.sendMail({
      from: "Aayan",
      to: doc.email,
      subject: "Images uploaded on cloud",
      html: `<h1>Your Image is Successfully Uploaded to cloud</h1><br><br><a href=${doc.imageUrl}>Image Link</>`,
    });
    console.log("Mail sent successfully to "+doc.email);
    console.log(info);
  } catch (err) {
    console.log(err);
  }
});
module.exports = mongoose.model("File", fileSchema);