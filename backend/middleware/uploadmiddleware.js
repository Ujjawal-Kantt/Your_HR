const multer = require('multer');
const path = require('path');

// Set up storage
const storage = multer.memoryStorage(); // Store file in memory

// Set up file filter for PDF files only
const fileFilter = (req, file, cb) => {
  const allowedTypes = /pdf/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  }
  cb(new Error('Invalid file type, only PDF is allowed!'));
};

const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;
