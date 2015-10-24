angular.module('directory.controllers', [])

    .controller('FoodListController', function ($scope,   Foods) {
        console.log("FOODLIST");

        $scope.foodDetail = function () {
          console.log(Foods.snack_name);
        }

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

    .controller('FoodDetailController', function($scope, $stateParams, Employees) {
      console.log('details');
      $scope.employee = Employees.get({employeeId: $stateParams.employeeId});
    })

    .controller('ReviewListController', function($scope, Reviews) {
      console.log('ReviewListController');

      $scope.searchKey = "";
      $scope.clearSearch = function () {
        $scope.searchKey = "";
        $scope.reviews = Reviews.query();
      }
      $scope.search = function () {
        $scope.reviews = Reviews.query({name: $scope.searchKey});
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
