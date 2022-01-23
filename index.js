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

app.post("/deleteAccount", (req, res) => {
    var user = req.body.user;
    var pw = req.body.pw;
    fs.readFile("user.json", "utf8", (err, jsonString) => {
    
        if(err) {
    console.log("Error");
    }

    var a=JSON.parse(jsonString);
    if(a["user"]==user && a["pw"]==pw) {
    fs.writeFileSync("user.json", "  ");
    res.send("account eliminated");
    
    }else{
    res.send("Error");
    }
    });
    });

    app.post("/addADP", (req, res) => {
        var user = req.body.user;
        var pw = req.body.pw;
        var ADP = req.body.ADP;
        
        fs.readFile("user.json", "utf8", (err, jsonString) => {
        if(err) {
        console.log("Error");
        }


        var a = JSON.parse(jsonString)
        if(a["user"]==user && a["pw"]==pw) {
        a["ADP"]=ADP;
        fs.writeFileSync("user.json", "    ");
        var b = JSON.stringify(b);
        fs.writeFileSync("user.json", b);
        res.send("ADP works");
        }else{
        res.send("Error");
        }
        });
        });

        app.post("/addMeet", (req, res) => {
            var user = req.body.user;
            var pw = req.body.pw;
            var name = req.body.name;
            var date = req.body.date;
            var hour = req.body.hour;
            var ADP = req.body.ADP;


            fs.readFile("user.json", "utf8", (err, jsonString) => {
            if(err) {
            console.log("Error");
            }

            
            var a = JSON.parse(jsonString);
            if(a["user"]==user && a["pw"]==pw) {
            var a = "name: "+name+ " , "+ "ADPmeet: "+ADP+ " , " +" date: "+date+ " , " +"hour: "+hour;
            var b = JSON.stringify(b);
            fs.writeFileSync("meet.json", a);
            res.send("Meet create");
            }else{
            res.send("Error");
            }
            });
            });
            

    app.listen(port, host, () => {
    console.log("server running at http://%s:%d", host, port);
    });

