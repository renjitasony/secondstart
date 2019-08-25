//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist/firstpro'));

app.get('*', function(req,res) {
  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(path.join(__dirname + '/dist/firstpro/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080,(req,res)=>{
  console.log("listening at 8080");
});
app.get("/add",(req,res)=>{
  res.send("Add me");
});
app.get("/view",(req,res)=>{
  res.send("View me");
});
app.get("/edit",(req,res)=>{
  res.send("Edit me");
});
app.get("/delete",(req,res)=>{
  res.send("Delete me");
});