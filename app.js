const express = require("express");
const bodyParser = require("body-parser");

const app=express();

var newcs= [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render('home');
});


app.get("/list1.ejs", function(req, res){

  res.render('list1', {addNewCourses: newcs});

});

app.post('/list1.ejs', function(req, res){
  var newc = req.body.newCourse;
  newcs.push(newc);

  res.redirect("/list1.ejs");
});


app.listen(3000, function(){
  console.log("Server started ton port 3000")
});
