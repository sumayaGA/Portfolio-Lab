//Dependencies
const express = require ("express");
const app = express();
const cors = require ("cors");

//Import JSON files
const projects = require("./projects.json");
const about = require("./about.json");

//Mount Middleware
app.use(cors());

//Test route/ Route-route
app.get("/", (req,res)=> {
    res.send("You got this!");
});

//Route for Projects
app.get("/projects", (req, res) => {
    res.json(projects);
});

//Route for About Info
app.get ("/about", (req,res)=> {
    res.json(about);
});


//Listener
PORT = 4000
app.listen (PORT, () =>
console.log ("I'm listening on PORT", PORT));