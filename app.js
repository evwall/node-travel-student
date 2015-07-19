var appHelper = require("./apphelper.js");

appHelper.runApp(function(app, db) {
	

	console.log("Travel application is running!");

	var myName = "Eden Wall";
	app.get("/", function (req, resp) {                             
		resp.write("<html><body><h1>Welcome to "+myName+"'s first web app!</body></html>");
		resp.end();
	});
  
  app.get("/icecream/:flavor/:topping", function (req, resp) {
    resp.render("icecream", {
      flavor: req.params.flavor
    });
  });
                                   
 app.get("/travel", function(req, resp) {
   db.findArray({}, function(results) {
     resp.render("travel", {
       locations: results
     })
   })
 })
   
    app.get("/travel/rating/:rating", function(req, resp) {
      var rating = parseInt(req.params.rating);
    db.findArray({ rating: rating }, function(results) {
     resp.render("travel", {
       locations: results
     })
   })
 })   
    
})