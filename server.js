const express = require('express');
const exphbs = require('express-handlebars');
//const bodyParser = require('body-parser');
const methodOverride = require('method-override');


const app = express();
app.use(methodOverride('_method'));
//app.use(bodyParser.urlencoded({extended:false}));

var PORT = process.env.PORT || 3000;

const products = [
	{id: 1, name: 'foo'},
	{id: 2, name: 'bar'},
	{id: 3, name: 'foobar'},
	{id: 4, name: 'barfoo'}
];

app.engine('handlebars', exphbs({
   defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.get('/', (req, res, next) => {
	res.render("index", { products });
});

app.put('/:id', (req, res, next) => {
	res.send('your id is put::: ' + req.params.id);//req.params.id);
});

app.listen(PORT, ()=> console.log('This shit is bananas'));
