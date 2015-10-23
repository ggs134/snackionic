angular.module('directory.services', ['ngResource'])
    .factory('Foods', function($resource) {
    	return $resource('/tab/home/:foodId/:ingredientId');
    })

    .factory('Employees', function ($resource) {
        return $resource('/employees/:employeeId/:data');
    });