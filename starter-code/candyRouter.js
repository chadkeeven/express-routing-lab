var express = require('express');
var bodyParser = require('body-parser');
const router = express.Router();

var candies = [{
	id:1,name: "Skittles", color:"red"
},
	{
	id:2, name: "gum", color: "white"
	},
{
	id:3,name: "ToitsiePop", color: "white"
	}];

//What would need to go into candies
//in order to pass our first test?


router.get('/', function(req,res) {
	res.send(candies);
	// What would go here? 
	// Hint: we want all candies in JSON format
});

 router.get('/new', function(req, res) {
 	console.log("new candy");
 	res.send("new candy");
   // NEW - Typically Displays an HTML Form
 });

 router.get('/:id', function(req, res) {
//   // SHOW
   //console.log("single bike");
   var i = req.params.id;
   i = parseInt(i) -1 ;
   console.log(i);
   res.send(candies[i]);
 });

 router.post('/', function(req, res) {
   // CREATE
   console.log("This is a post request");
   var newId = candies.length + 1;
   var newCandy ={id:newId, name: "Jelly Belly", color:"Orange"};
   candies.push(newCandy);
   res.send(newCandy);
 });

 router.put('/:id/edit', function(req, res) {
   // EDIT - Typically Displays an HTML Form
	var editId = req.params.id;
	 editId = parseInt(editId) - 1 ;
	 console.log("this page edits");
	var editCandy = {id: editId + 1,name: "Chocolate", color:"Brown"};
	candies[editId] = editCandy;
   res.send(candies[editId]);
 });

 router.delete('/:id', function(req, res) {
//   // DELETE
	var deleteId = req.params.id;
	 deleteId = parseInt(deleteId) - 1 ;
	 console.log("this page deletes");
	 candies[deleteId] = null;
	 res.send({message: "deleted"});
 });


module.exports = router;




