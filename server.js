const express = require("express");
const dbConnect = require("./Config/database");
const Upload = require("./Routes/FileUpload");
const {cloudinaryConfigure} = require("./Config/cloudinary");
const fileUpload = require("express-fileupload");
require("dotenv").config();

const app = express();


const port = process.env.PORT || 4000; // Use PORT for the server

// middlewares
app.use(express.json()); // request body json data parser
app.use(fileUpload()); //  upload files on server 


// mapping of routes with app
app.use("/api/v1/upload", Upload);

// server starting
app.listen(port, () => {
  console.log(`server is running on port ${port}...`);
});

// cloudinary configuration
cloudinaryConfigure();  // to upload files on media server using server
// database connection
dbConnect(); // to store data to server
