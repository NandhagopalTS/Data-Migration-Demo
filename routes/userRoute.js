import express from "express"
import multer from "multer"
import importUser, {} from "../Controller/userController.js";

const user = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'Uploads/')
    },
    filename: function (req, file, cb) {
    
      cb(null, file.originalname )
    }
  })
  
  const upload = multer({ storage: storage })

  user.post("/importUser",upload.single('file'),importUser)

  export default user