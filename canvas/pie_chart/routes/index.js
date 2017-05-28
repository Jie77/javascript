
/*
 * GET home page.
 */

module.exports = function(app){
	app.get('/',(req,res)=>{
		res.render('index',{});
	});
	app.post('/work',(req,res)=>{
		var body = {
		 	a:13,
		 	b:23,
		 	c:15,
		 	d:40,
		 	e:27
		};

		var bodyString = JSON.stringify(body);
		res.write(bodyString);
		res.end();
	});
}