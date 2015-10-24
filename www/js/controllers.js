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

    .controller('ReviewController', function($scope, Review){
        $scope.searchKey = "";
        $scope.clearSearch = function () {
            $scope.searchKey = "";
            $scope.review = Review.query();
        }
        $scope.search = function () {
            $scope.foods = Review.get({search: $scope.searchKey});
        }
        $scope.reviews = Review.query();
    })

    .controller('FoodDetailController', function($scope, $stateParams, Employees) {
        console.log('details');
        $scope.employee = Employees.get({employeeId: $stateParams.employeeId});
    })

    .controller('EmployeeDetailCtrl', function($scope, $stateParams, Employees) {
        console.log('details');
        $scope.employee = Employees.get({employeeId: $stateParams.employeeId});
    })

    .controller('EmployeeReportsCtrl', function ($scope, $stateParams, Employees) {
        console.log('reports');
        $scope.employee = Employees.get({employeeId: $stateParams.employeeId, data: 'reports'});
    });