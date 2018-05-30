var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 3001;


app.use(express.static(path.join(__dirname, "public")));

app.get('/api/message', (req, res) => {
    console.log("get: /api/message");
    res.setHeader("Content-Type", "application/json");
    res.send('{"message": "hi"}');
});

app.listen(port);

console.log("listening on port %d", port);
