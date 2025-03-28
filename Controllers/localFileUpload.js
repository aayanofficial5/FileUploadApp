
exports.localFileUpload = async (req, res) => {
  try {
    const file = req.files.file;
    console.log(file);

    let path =
      __dirname + "/files/" + Date.now() + "." + file.name.split(".")[1];

    file.mv(path, (err) => {
      if (err) console.log(err);
    });

    res.status(200).json({
      sucess: true,
      message: "Local File uploaded successfully",
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: "Upload Failed!",
    });
  }
};
