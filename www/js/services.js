angular.module('directory.services', ['ngResource'])
    .factory('Snacks', function($resource) {
    	return $resource('/main/:menu/:snackId/:ingredientPage');
    })

    .factory('Employees', function ($resource) {
        return $resource('/employees/:employeeId/:data');
    });