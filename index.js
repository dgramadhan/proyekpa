var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080;

 var path = require('path');

// app.get('/', (req, res) => res.send('<h2> Hello World! </h2>'));
app.listen(port, () => console.log(`app listening on port ${port}`))
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'web_coba.html')));

app.use(express.static(__dirname + '/public'));

// //     bodyParser = require('body-parser'),
// //     controller = require('./controller');

// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(bodyParser.json());
// // // kalau pengen ujicoba tanpa link comment ini dibawah
// // // app.use(express.static('public'));
// // // app.use(express.static('assets'));
// // // app.use(express.static('json'));

// // // d

// // var routes = require('./routes');
// // routes(app);

// app.listen(port);
// console.log('API jalan di port : ' + port);
