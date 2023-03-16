import multer from "multer";
import  path  from "path";
//multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      let ext = path.extname(file.originalname)
      cb(null, Date.now() + "." + ext);
    },
  });
  
  const upload = multer({
     storage: storage ,
      limits : {fileSize : 1024 * 1024 * 2}});

      export default upload