var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("omg hai");
});

app.listen(port);

console.log("listening on port %d", port);
