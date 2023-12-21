const express = require('express');
const path = require('path');
const app = express();
app.use('/static', express.static('public'))

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/wikisearch.html");
});

app.listen(3000, function () {
  console.log("Server is running on localhost3000");
});