const httpStatus = require("http-status");
const fs = require("fs").promises;
const path = require("path");
const catchAsync = require("../utils/catchAsync");
const GenUuid = require("../utils/generateRandomString");

const UPLOADS_FOLDER = path.join(__dirname, "../uploads");

const upload = catchAsync(async (req, res) => {
  if (!req.file) {
    return res.status(httpStatus.NO_CONTENT).json({ error: "Please upload a file" });
  }

  const key = GenUuid();
  const fileName = `${key}-${req.file.originalname}`;
  const filePath = path.join(UPLOADS_FOLDER, fileName);

  await fs.writeFile(filePath, req.file.buffer);

  const response = {
    message: "File uploaded successfully",
    url: `/uploads/${fileName}`
  };

  return res.json(response);
});

module.exports = { upload };
