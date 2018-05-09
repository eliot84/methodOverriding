const express = require('express');
const exphbs = require('express-handlebars');

const methodOverride = require('method-override');


const app = express();
app.use(methodOverride('_method'));

var PORT = process.env.PORT || 3000;

const products = [
	{id: 5, name: 'foo'},
	{id: 2, name: 'bar'},
	{id: 3, name: 'foobar'}
];

app.engine('handlebars', exphbs({
   defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.get('/', (req, res, next) => {
	res.render("index", { products });
});

app.delete('/:id?', (req, res, next) => {
	res.send('your id is: ' + req.body.id);
});

app.listen(PORT, ()=> console.log('This shit is bananas'));
