//Install express server
const express = require('express');
const path = require('path');
var mongoose = require('mongoose');

var product = require('./src/assets/model/product');

const app = express();
var url = 'mongodb://localhost/mydb1';
mongoose.connect(url,{useNewUrlParser:true},(err)=>{
  if(err) throw err;
  else{
    console.log("db connected");
  }
})
// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname));

app.get('*', function(req,res) {
  // Replace the '/dist/<to_your_project_name>/index.html'
  console.log(path.join(__dirname + '/src/index.html'));
  res.sendFile(path.join(__dirname + '/src/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080,(req,res)=>{
  console.log("listening at 8080");
});
app.get("/add",(req,res)=>{
  var p1 = new product();
  p1.product_id = "P1";
  p1.product_title = "My title";
  p1.product_image = "image1.jpg";
  p1.save((err)=>{
    if(err) throw err;
    else{
      console.log("added");
      res.send("Added data");
    }
  })
  
});
app.get("/view",(req,res)=>{
  product.findOne({product_id:"P1"},(err,result)=>{
    if(err) throw err;
    else{
      console.log(result.product_id);
      console.log(result.product_title);
      console.log(result.product_image);
      res.send("View");
    }
  })
  
});
app.get("/edit",(req,res)=>{
  product.updateOne({product_id:"P1"},{$set:{product_title:"new title",product_image:"image2.jpg"}},(err,result)=>{
    if(err) throw err;
    else{
      console.log("updated");
      res.send("Edited");
    }
  })  
});
app.get("/delete",(req,res)=>{
  product.deleteOne({product_id:"P1"},(err)=>{
    if(err) throw err;
    else{
      console.log("deleted");
    }
  })
  res.send("Delete me");
});