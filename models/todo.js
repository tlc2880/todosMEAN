// Name: Tommy Cao
// Date: 12/27/19
// Description: Bookstore CRUD App using MEAN (MongoDB, Express, Angular, Node.js)

const mongoose = require('mongoose');

// Book Schema
const todoSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	priority:{
		type: String,
		required: true
    },
	create_date:{
		type: Date,
		default: Date.now
	}    
});

const Todo = module.exports = mongoose.model('Todo', todoSchema);

// Get Todos
module.exports.getTodos = (callback, limit) => {
	Todo.find(callback).limit(limit);
}

// Get Todo
module.exports.getTodoById = (id, callback) => {
	Todo.findById(id, callback);
}

// Add Todo
module.exports.addTodo = (todo, callback) => {
	Todo.create(todo, callback);
}

// Update Todo
module.exports.updateTodo = (id, todo, options, callback) => {
	var query = {_id: id};
	var update = {
		title: todo.title,
		priority: todo.priority
	}
	Todo.findOneAndUpdate(query, update, options, callback);
}

// Delete Todo
module.exports.removeTodo = (id, callback) => {
	var query = {_id: id};
	Todo.remove(query, callback);
}
