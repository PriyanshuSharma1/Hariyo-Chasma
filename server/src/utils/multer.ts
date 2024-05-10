import multer from 'multer';
// Set up multer storage engine
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/'); // specify the directory where files will be uploaded
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + '-' + file.originalname); // specify the filename
	},
});

// Initialize multer with the specified storage engine
const upload = multer({ storage: storage });

export default upload;
