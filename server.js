var express = require('express');
var cors = require('cors');
require('dotenv').config()
const fileUpload = require('express-fileupload');

var app = express();

app.use(fileUpload());

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', (req, res) => {
  let sampleFile = req.files.upfile;
  let fileName = sampleFile.name;
  let fileSize = sampleFile.size;
  let fileType = sampleFile.mimetype;
  res.send({
    name: fileName,
    size: fileSize,
    type: fileType
  });
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
