// Name: Tommy Cao
// Date: 12/27/19
// Description: Bookstore CRUD App using MEAN (MongoDB, Express, Angular, Node.js)

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

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
/////////////////////////////////////////////////////////////////////////

app.listen(3000);
console.log('Running on port 3000...');
