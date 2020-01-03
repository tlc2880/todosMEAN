// Name: Tommy Cao
// Date: 12/27/19
// Description: Bookstore CRUD App using MEAN (MongoDB, Express, Angular, Node.js)

var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'BooksController',
		templateUrl: 'views/books.html'
	})

	.when('/books', {
		controller:'BooksController',
		templateUrl: 'views/books.html'
	})
	.when('/books/details/:id',{
		controller:'BooksController',
		templateUrl: 'views/book_details.html'
	})
	.when('/books/add',{
		controller:'BooksController',
		templateUrl: 'views/add_book.html'
	})
	.when('/books/edit/:id',{
		controller:'BooksController',
		templateUrl: 'views/edit_book.html'
	})
	//////////////////////////////////////
	.when('/genres', {
		controller:'GenresController',
		templateUrl: 'views/genres.html'
	})
	.when('/genres/edit/:id',{
		controller:'GenresController',
		templateUrl: 'views/edit_genre.html'
	})
	.when('/genres/add',{
		controller:'GenresController',
		templateUrl: 'views/add_genre.html'
	})
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