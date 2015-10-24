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

        $scope.foodDetail = function(item) {
          // Shows/hides the delete button on hover
          var foodId = $scope.food._id;
          console.log(foodId);
          $location.path("#/tab/home/foodId")
        }; 

        $scope.foods = Foods.query();
    })

    .controller('FoodDetailController', function($scope, $stateParams, Foods) {
      $scope.food = Foods.get({_id: $stateParams.foodId});
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
