var appRouter = function(app) {
	
	app.get("/", function(req, res) {
        res.send("Olá mundo cruel");
	});
 
}
 
module.exports = appRouter;