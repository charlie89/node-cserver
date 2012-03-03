require("cSettings").init(process.env['app_config'], function(cSettings){
	var http = require("http");
	var cRouter = require('cRouter');
	var session = require('cSession');
   var cpluginloader = require("cPluginLoader");
   cpluginloader.init();
   
	var router = cRouter.route([
		{ // Create a new router
			api: 'favicon.ico',
			method: 'GET',
		callback: require('cFile').staticFile(__dirname + '/client/favicon.ico', 'image/x-icon')
		}
		,{
			api: 'images',
			method: 'GET',
			callback: function(req, res){
				//req.cURL.pathname += '.svg';
				require('cFile').staticDir(__dirname + "/client/jquery.mobile-1.0.1/images", { //TODO: register image dirs in package.confs
					".png": "image/png",
					".jpg": "image/jpeg",
					".jpeg": "image/jpeg",
					".gif": "image/gif",
					".svg": require('mime').lookup('.svg')
				})(req, res);
			}
		}
		,{		// enable for file webserver
			api: 'html',
			method: 'GET',
			callback: require('cFile').staticDir(__dirname + '/client',{ '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.json': 'mime/json', '.mp3': 'audio/mp3'})
		}
	]);
   
	router.add(cpluginloader.route);
   router.add(require("cIndex").route);
	router.add(require("cFile").route);
	router.add(require("cDB").route);
   router.add(require('cOS').route);

	http.createServer(
		function(req, res){
			session(req, res,
				router);
		}
	).listen(cSettings.env.port);

	console.log("Server running at localhost:" + cSettings.env.port + (cSettings.debug? " debug": " release"));

});
