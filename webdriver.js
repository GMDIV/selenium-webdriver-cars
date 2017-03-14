var http = require('http');
var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().forBrowser('chrome').build(); 


driver.get('https://www.netdirectautosales.com/inventory/');
driver.findElement(webdriver.By.className('heading filter-heading-make')).click();





http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Check out the console for the results. In the command line. Not over there ----->>>>');
}).listen(3000, "127.0.0.1");
    
console.log('Server running at http://127.0.0.1:3000/');