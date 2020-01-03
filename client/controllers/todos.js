// Name: Tommy Cao
// Date: 12/27/19
// Description: Bookstore CRUD App using MEAN (MongoDB, Express, Angular, Node.js)

var myApp = angular.module('myApp');

myApp.controller('TodosController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('TodosController loaded...');

	$scope.getTodos = function(){
		$http.get('/api/todos').success(function(response){
			$scope.todos = response;
		});
    }
    
	$scope.addTodo = function(){
		console.log($scope.todo);
		$http.post('/api/todos/', $scope.todo).success(function(response){
			window.location.href='#/todos';
		});
	}

	$scope.updateTodo = function(){
        console.log($scope.todo);
		var id = $routeParams.id;
		$http.put('/api/todos/'+id, $scope.todo).success(function(response){
			window.location.href='#/todos';
		});
    }
    
	$scope.removeTodo = function(id){
		$http.delete('/api/todos/'+id).success(function(response){
			window.location.href='#/todos';
		});
	}    
}]);