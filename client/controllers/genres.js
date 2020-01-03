// Name: Tommy Cao
// Date: 12/27/19
// Description: Bookstore CRUD App using MEAN (MongoDB, Express, Angular, Node.js)

var myApp = angular.module('myApp');

myApp.controller('GenresController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('GenresController loaded...');

	$scope.getGenres = function(){
		$http.get('/api/genres').success(function(response){
			$scope.genres = response;
		});
    }
	
	$scope.getGenre = function(){
		var id = $routeParams.id;
		$http.get('/api/genres/'+id).success(function(response){
			$scope.genre = response;
		});
	}

	$scope.addGenre = function(){
		console.log($scope.genre);
		$http.post('/api/genres/', $scope.genre).success(function(response){
			window.location.href='#/genres';
		});
	}

	$scope.updateGenre = function(){
		console.log($scope.genre);		
		var id = $routeParams.id; 
		$http.put('/api/genres/'+id, $scope.genre).success(function(response){
			window.location.href='#/genres';
		});
    }
    
	$scope.removeGenre = function(id){
		$http.delete('/api/genres/'+id).success(function(response){
			window.location.href='#/genres';
		});
	}    
}]);