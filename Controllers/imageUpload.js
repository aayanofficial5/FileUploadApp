const cloudinary = require("cloudinary").v2;
const File = require("../Models/File");
exports.imageUpload = async (req, res) => {
  try {
    //data fetch
    const { name, email, tags } = req.body;
    const file = req.files.imageFile;
    // validation
    const supportedTypes = ["jpg", "jpeg", "png"];
    const fileType = file.name.split(".")[1].toLowerCase();
    if (!supportedTypes.includes(fileType)) {
      return res.status(400).json({ message: "File type not supported" });
    }

    // file upload to cloudinary
    const cloudResponse = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: "Aayan",
    });
    // file upload to database
    const dbResponse = await File.create({
      name,
      email,
      tags,
      imageUrl: cloudResponse.secure_url,
    });
    // return response
    res.status(201).json({
      success: true,
      data:dbResponse,
      message: "Image uploaded successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: err.message,
    });
  }
};
