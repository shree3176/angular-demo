const express = require('express');
const app = express();
const path = require('path');

process.env.PWD = process.cwd();

app.use(express.static(process.env.PWD + '/build'));

app.listen(process.env.PORT || 8080);

app.get('/*', function(req, res){
    res.sendFile(path.join(process.env.PWD, '/build/index.html'));
})
console.log('Console listening');