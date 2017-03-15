var http = require('http');
var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().forBrowser('chrome').build(); 
var makeDataArray = [];


driver.get('https://www.netdirectautosales.com/inventory/');
driver.findElement(webdriver.By.className('heading filter-heading-make')).click();


driver.findElements(webdriver.By.css(".filter-option-make"))
  	.then(function(car){
		console.log("make", car[0].getText())
		//return car[0].getText()
		return Promise.all(car.map(function(make){return make.getText()}))
	})
	.then(function(make1){
		console.log("make1", make1)
		make1.map(function(make){
			var withoutParens = make1[0].split(/\ |\(|\)/)  //["Cheverolet", " ", "39", " " ]
			console.log("withoutParens", withoutParens)
			var makeAndCount = {
				name: withoutParens[0],
				count: withoutParens[2]
			}
			console.log("makeAndCount", makeAndCount)
		});
	});

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Check out the console for the results. In the command line. Not over there ----->>>>');
}).listen(3000, "127.0.0.1");
    
console.log('Server running at http://127.0.0.1:3000/');