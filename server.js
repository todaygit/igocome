var express = require('express');

var app = express();
app.use(express.static('dist'));
app.use(express.static('./src/assets'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Servier is listening on ' + port));