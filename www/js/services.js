angular.module('directory.services', ['ngResource'])
.factory('Food', function($resource) {
  return $resource('/tab/home/:foodName');
})
.factory('Food_detail', function($resource) {
  return $resource('/tab/home/:foodId/detail');
})
.factory('Foods', function($resource) {
  return $resource('/tab/home');
})
.factory('Reviews', function($resource) {
  return $resource('/tab/review');
})
.factory('Comment', function($resource) {
  return $resource('/detail/comment');
})
.factory('Users', function($resource) {
  return $resource('/tab/my/:userId');
})
.factory('Employees', function ($resource) {
  return $resource('/employees/:employeeId/:data');
});
