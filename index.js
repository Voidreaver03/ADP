const express = require("express");
app.use(express.json());
const app = express();
const host = "localhost";
let jsonFile = require('jsonfile');
const fs = require("fs");
const port = 5000;


app.post("/login", (req, res) => {
var user = req.body.user;
var pw = req.body.pw;
fs.readFile("user.json", "utf8", (err, jsonString) => {
if(err) {
console.log("Error");
}


    var a=JSON.parse(jsonString);
    if(a["user"]==user && a["pw"]==pw) {
    res.send("Login");
    }else{
    res.send("Error");
    }
});
});

app.listen(port, host, () => {
    console.log("server running at http://%s:%d", host, port);
    });