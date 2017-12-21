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

// bikeRouter.post('/', function(req, res) {
//   // CREATE
//   console.log("This is a post request");
//   res.send("Post request to /bicycles");
// });

// bikeRouter.get('/:id/edit', function(req, res) {
//   // EDIT - Typically Displays an HTML Form
//   res.send("edit bike form");
// });

// bikeRouter.put('/:id', function(req, res) {
//   // UPDATE
// });

// bikeRouter.delete('/:id', function(req, res) {
//   // DELETE
// });









// Fill out the rest of the routes here

module.exports = router;








// bikeRouter.get('/new', function(req, res) {
// 	console.log("bike form");
// 	res.send("bike form");
//   // NEW - Typically Displays an HTML Form
// });

// bikeRouter.get('/:id', function(req, res) {
//   // SHOW
//   console.log("single bike");
//   res.send("single bike");
// });

// bikeRouter.post('/', function(req, res) {
//   // CREATE
//   console.log("This is a post request");
//   res.send("Post request to /bicycles");
// });

// bikeRouter.get('/:id/edit', function(req, res) {
//   // EDIT - Typically Displays an HTML Form
//   res.send("edit bike form");
// });

// bikeRouter.put('/:id', function(req, res) {
//   // UPDATE
// });

// bikeRouter.delete('/:id', function(req, res) {
//   // DELETE
// });



