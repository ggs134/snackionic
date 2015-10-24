angular.module('directory.services', ['ngResource'])
.factory('Foods', function($resource) {
  return $resource('/tab/home/:foodId/:ingredientId');
})
.factory('Reviews', function($resource) {
  return $resource('/tab/review');
})
.factory('Review', function($resource) {
  return $resource('/tab/review/:search');
})
.factory('Employees', function ($resource) {
  return $resource('/employees/:employeeId/:data');
});
