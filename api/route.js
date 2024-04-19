const http = require('http');
const url = require('url');
module.exports = http.createServer((req, res) => {
  
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');

    var foodItemsOps = require('./controller.js');
    const reqUrl =  url.parse(req.url, true);
// GET endpoint
  if(reqUrl.pathname == '/fooditems' && req.method === 'GET') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    foodItemsOps.getFoodItems(req, res);
   }
 }
)