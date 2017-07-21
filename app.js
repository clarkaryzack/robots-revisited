const express = require("express");
const mongoose = require("mongoose");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const Robots = require("./models/robot");

mongoose.connect("mongodb://localhost:27017/robotsRevisited");
var db = mongoose.connection;

const mustacheExpress = require("mustache-express");
const mustache = require("mustache");

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

// app.use(express.static("public"));

// app.get("/", function(req, res) {
// 	Robot.find(function(err, robots) {
// 		if (err) {
// 			console.error(err);
// 		}
// 		console.log(robots)
// 		res.render("index", {robots: robots});
// 	});
// });

app.get("/", function(req, res) {
	res.redirect("/users");
});

app.get("/users", function(req, res) {
	Robots.find({}).then(function(robots) {
		res.render("index", {robots: robots});
	});
});

app.get("/users/:username", function(req, res) {
	console.log("hey");
	Robots.findOne(
		{username:req.params.username},
		(err, robot) => {res.render("single", {robot: robot})}
	);
});

// app.get(‘/:username/‘, function (req, res) {
//   const user = data.users.find(function (user) { return user.username == req.params.username });
//   res.render(‘profile’, { user: user });
// });

app.listen(3000, function() {
	console.log("Successfully started express application!");
});
