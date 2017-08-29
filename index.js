var express = require("express");
var moment = require("moment");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var fs = require("fs");

var app = express();



app.set("view engine","pug");

app.use("/",bodyParser.urlencoded({extended:false}));

app.use("/assets", express.static(__dirname+"/forms"));

app.get("/form",function (req,res) {
    res.sendFile(__dirname+"/forms/form.html");
});

app.post("/assets/submit",function (req,res) {
    var year = req.body.dob.substring(0,4);
    var month = req.body.dob.substring(5,7);
    var day = req.body.dob.substring(8,10);
    var dobMoment = moment([year,month-1,day]);
    var now = moment();
    var difference = now.diff(dobMoment,"days");
    res.render("index", {title: "Submit Page", name: req.body.name, days: difference});
});
app.post("/submit",function (req,res) {
    var year = req.body.dob.substring(0,4);
    var month = req.body.dob.substring(5,7);
    var day = req.body.dob.substring(8,10);
    var dobMoment = moment([year,month-1,day]);
    var now = moment();
    var difference = now.diff(dobMoment,"days");
    res.render("index", {title: "Submit Page", name: req.body.name, days: difference});
});

var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});
app.use(morgan('combined', {stream: accessLogStream}));

app.listen(3000);