// Name: Tommy Cao
// Date: 12/27/19
// Description: Bookstore CRUD App using MEAN (MongoDB, Express, Angular, Node.js)

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Genre = require('./models/genre');
Book = require('./models/book');
Todo = require('./models/todo');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/todosMEAN');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/books or /api/todos');
});

app.get('/api/todos', (req, res) => {
	Todo.getTodos((err, todos) => {
		if(err){
			throw err;
		}
		res.json(todos);
	});
});

app.post('/api/todos', (req, res) => {
	var todo = req.body;
	Todo.addTodo(todo, (err, todo) => {
		if(err){
			throw err;
		}
		res.json(todo);
	});
});

app.put('/api/todos/:_id', (req, res) => {
	var id = req.params._id;
	var todo = req.body;
	Todo.updateTodo(id, todo, {}, (err, todo) => {
		if(err){
			throw err;
		}
		res.json(todo);
	});
});

// Add this to do edit genre
app.get('/api/todos/:_id', (req, res) => {
	Todo.getTodoById(req.params._id, (err, todo) => {
		if(err){
			throw err;
		}
		res.json(todo);
	});
});

app.delete('/api/todos/:_id', (req, res) => {
	var id = req.params._id;
	Todo.removeTodo(id, (err, todo) => {
		if(err){
			throw err;
		}
		res.json(todo);
	});
});
////////////////////////////////////////////////////////
app.get('/api/genres', (req, res) => {
	Genre.getGenres((err, genres) => {
		if(err){
			throw err;
		}
		res.json(genres);
	});
});

app.post('/api/genres', (req, res) => {
	var genre = req.body;
	Genre.addGenre(genre, (err, genre) => {
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

app.put('/api/genres/:_id', (req, res) => {
	var id = req.params._id;
	var genre = req.body;
	Genre.updateGenre(id, genre, {}, (err, genre) => {
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

// Add this to do edit genre
app.get('/api/genres/:_id', (req, res) => {
	Genre.getGenreById(req.params._id, (err, genre) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.delete('/api/genres/:_id', (req, res) => {
	var id = req.params._id;
	Genre.removeGenre(id, (err, genre) => {
		if(err){
			throw err;
		}
		res.json(genre);
	});
});
/////////////////////////////////////////////////////////////////////////
app.get('/api/books', (req, res) => {
	Book.getBooks((err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

app.get('/api/books/:_id', (req, res) => {
	Book.getBookById(req.params._id, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.post('/api/books', (req, res) => {
	var book = req.body;
	Book.addBook(book, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.put('/api/books/:_id', (req, res) => {
	var id = req.params._id;
	var book = req.body;
	Book.updateBook(id, book, {}, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.delete('/api/books/:_id', (req, res) => {
	var id = req.params._id;
	Book.removeBook(id, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.listen(3000);
console.log('Running on port 3000...');
