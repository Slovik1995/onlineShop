//var express = require('express');
//var app = express();
//var connect = require('connect');
//var serveStatic = require('serve-static');
//connect().use( serveStatic("../dist/my-app")).listen(5001);
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var connect = require('connect');
//var serveStatic = require('serve-static');
var server = require('http' ).createServer(app);
var io = require('socket.io' )(server);
io.on('connection' , function(client) {
	console.log('Client connected...' );
	client.emit('messages' , { hello: 'test' });
});
 


const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

// Instruct the app
// to use the forceSSL
// middleware

app.use(forceSSL());

app.use(express.static(__dirname + '/dist/my-app/'));
app.get('/' , function (req, res) {
	console.log("get/ method");
	res.sendFile('index.html');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const path = require('path');

// ...

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/my-app/index.html'));
});

mongoose.connect('mongodb://login:password@ds227594.mlab.com:27594/shopdb',{useNewUrlParser: true});  //replace login and  password

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'błąd połączenia...'));
db.once('open', function() {
	console.log('Connected!');
});


var Schema = mongoose.Schema;
var ProduktComponent = new Schema({
  id: String,
  name: String,
  products_count: Number,
  price: Number,
  description: String,
  link: String,
  category: String
});
mongoose.model('ProduktComponent',ProduktComponent);

var OrderProductComponents = new Schema({
  isCompleted : Boolean,
  id: String,
  name: String,
  products_count: Number,
  price: Number,
  description: String,
  link: String,
  category: String
});
mongoose.model('OrderProductComponents',OrderProductComponents);

var Order = new Schema({
  id: String,
  name: String,
  address: String,
  email: String,
  tel: String,
  date: String,
  state: String,
  products: [OrderProductComponents]

});
mongoose.model('Order',Order);



app.get('/orders', function (req, res) {
console.log('get orders');
	
    var Product = mongoose.model('Order');
	Product.find(function(err, products){
		if (err) throw err;
    
		console.log(products);
		res.send(products);
	});
})


app.put('/orders/:id', function(req,res){
console.log('jestem w put w orders');
console.log("node order put");

	var Order = mongoose.model('Order');


    Order.findOneAndUpdate(
    { id: req.params.id }, 
    { $set: {
        id: req.body.id,
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        tel: req.body.tel,
        date: req.body.date,
        state: req.body.state,
        products: req.body.products       
     } }, 
    {new: true}, 
	(err, doc) => {
    if (err) {
        console.log("Something wrong when updating data!");
    }
    if(doc==null){
            console.log("Jestem w bloku");
          
      var Order = mongoose.model('Order');
        var newOrder = new Order();

    newOrder.id = req.body.id;
	newOrder.name = req.body.name;
	newOrder.address = req.body.address;
	newOrder.email = req.body.email;
	newOrder.tel = req.body.tel;
	newOrder.date = req.body.date;
    newOrder.state = req.body.state;
	newOrder.products = req.body.products;

	
	newOrder.save(function(err) {
		if (err) throw err;
		console.log('Produkt zapisany.');
	});

        res.send('Done');
    
    }
    console.log(doc);
    });	
})



app.get('/products', function (req, res) {
	var Product = mongoose.model('ProduktComponent');
	Product.find(function(err, products){
		if (err) throw err;

		console.log(products);
		res.send(products);
	});
})

app.put('/products/:id', function(req,res){
console.log('jestem w put');



    var updateObj = {
        category: req.params.category, 
        description: req.params.description, 
        link: req.params.link, 
        name: req.params.name, 
        price: req.params.price, 
        products_count: req.params.products_count
    }

	var Product = mongoose.model('ProduktComponent');

    Product.findOneAndUpdate(
    { id: req.params.id }, 
    { $set: {
        category: req.body.category, 
        description: req.body.description, 
        link: req.body.link, 
        name: req.body.name, 
        price: req.body.price, 
        products_count: req.body.products_count

     } }, 
    {new: true}, 
	(err, doc) => {
    if (err) {
        console.log("Something wrong when updating data!");
    }

    console.log(doc);
    });	
})

app.post('/products', function (req, res) {
console.log('jestem w post');
        var Product = mongoose.model('ProduktComponent');
        var newProduct = new Product();

    newProduct.category = req.body.category;
	newProduct.description = req.body.description;
	newProduct.id = req.body.id;
	newProduct.link = req.body.link;
	newProduct.name = req.body.name;
	newProduct.price = req.body.price;
    newProduct.products_count = req.body.products_count;	
	
	newProduct.save(function(err) {
		if (err) throw err;
		console.log('Produkt zapisany.');
	});

        res.send('Done');
})


app.listen(process.env.PORT || 8080);
