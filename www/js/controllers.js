angular.module('directory.controllers', [])

    .controller('FoodListController', function ($scope, Foods) {

        /*$scope.searchKey = "";
        $scope.clearSearch = function () {
            $scope.searchKey = "";
            $scope.employees = Employees.query();
        }
        $scope.search = function () {
            $scope.employees = Employees.query({name: $scope.searchKey});
        }
        $scope.employees = Employees.query();*/

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

    .controller('EmployeeDetailCtrl', function($scope, $stateParams, Employees) {
        console.log('details');
        $scope.employee = Employees.get({employeeId: $stateParams.employeeId});
    })

    .controller('EmployeeReportsCtrl', function ($scope, $stateParams, Employees) {
        console.log('reports');
        $scope.employee = Employees.get({employeeId: $stateParams.employeeId, data: 'reports'});
    });