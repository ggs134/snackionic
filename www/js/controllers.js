angular.module('directory.controllers', [])

.controller('FoodListController', function ($scope, Foods) {
  $scope.searchKey = "";
  $scope.clearSearch = function () {
    $scope.searchKey = "";
    $scope.foods = Foods.query();
  }
  $scope.search = function () {
    $scope.foods = Foods.query({name: $scope.searchKey});
  }
  $scope.foods = Foods.query();
})

.controller('FoodDetailController', function($scope, $stateParams, Food, $ionicModal) { 
  $scope.food = Food.get({foodId: $stateParams.foodId});

// Load the modal from the given template URL
    $ionicModal.fromTemplateUrl('/templates/comments-modal.html', function($ionicModal) {
        $scope.modal = $ionicModal;
    }, {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope,
        // The animation we want to use for the modal entrance
        animation: 'slide-in-up'
    });  


})

.controller('ReviewListController', function($scope,Review,Reviews) {
  console.log('ReviewListController');

  $scope.searchKey = "";
  $scope.clearSearch = function () {
    $scope.searchKey = "";
    $scope.reviews = Reviews.query();
  }
  $scope.search = function () {
    $scope.reviews = Review.query({name: $scope.searchKey});
  }
  $scope.reviews = Reviews.query();

})


.controller('EmployeeDetailCtrl', function($scope, $stateParams, Employees) {
  console.log('details');
  $scope.employee = Employees.get({employeeId: $stateParams.employeeId});
})

.controller('EmployeeReportsCtrl', function ($scope, $stateParams, Employees) {
  console.log('reports');
  $scope.employee = Employees.get({employeeId: $stateParams.employeeId, data: 'reports'});
});
