import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads')
  },
  filename: (req, file, cb) => {
		cb(null, Date.now() +'-'+ file.originalname)
  }
})

var upload = multer({storage});

export default upload;
