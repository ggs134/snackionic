angular.module('directory.services', ['ngResource'])
.factory('Food', function($resource) {
  return $resource('/tab/home/:foodId/detail');
})
.factory('Foods', function($resource) {
  return $resource('/tab/home');
})
.factory('Reviews', function($resource) {
  return $resource('/tab/review');
})
.factory('Reviews', function($resource) {
  return $resource('/tab/review/:reviewId');
})
.factory('Review', function($resource) {
  return $resource('/tab/review/:search');
})
.factory('Users', function($resource) {
  return $resource('/tab/my/:userId');
})
.factory('Employees', function ($resource) {
  return $resource('/employees/:employeeId/:data');
});
