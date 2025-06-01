const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: 3 * 60 * 1000 * 1024 } }); // ~3MB
module.exports = upload;
