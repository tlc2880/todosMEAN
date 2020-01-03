// Name: Tommy Cao
// Date: 12/27/19
// Description: Bookstore CRUD App using MEAN (MongoDB, Express, Angular, Node.js)

var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'TodosController',
		templateUrl: 'views/todos.html'
	})	
	//////////////////////////////////////
	///////////////////////////////////////////
	.when('/todos', {
		controller:'TodosController',
		templateUrl: 'views/todos.html'
	})
	.when('/todos/edit/:id',{
		controller:'TodosController',
		templateUrl: 'views/edit_todo.html'
	})
	.when('/todos/add',{
		controller:'TodosController',
		templateUrl: 'views/add_todo.html'
	})
	/////////////////////////////////////////////		
	.otherwise({
		redirectTo: '/'
	});
});