require("dotenv").config();
const formidable = require("express-formidable");
const cloudinary = require("cloudinary").v2;

module.exports = function (app) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARING_API_SECRET,
  });

  app.post("/images/uploadimage", formidable(), (req, res) => {
    console.log(req);
    cloudinary.uploader.upload(
      req?.files?.file.path,
      (error, result) => {
        res.status(200).send({
          public_id: result.public_id,
          url: result.url,
        });
      }
    );
  });

  app.post("/images/removeimage", (req, res) => {
    let image_id = req.query.public_id;
    cloudinary.uploader.destroy(image_id, (error, result) => {
      if (error) return res.json({ success: false, error });
      res.status(200).send("Okay");
    });
  });
};
