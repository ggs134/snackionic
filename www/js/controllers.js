angular.module('directory.controllers', [])

.controller('FoodListController',  function ($scope, Foods) {
  $scope.foods = Foods.query();
})
.controller('FoodDetailController', function($scope,$http, $stateParams, Food_detail,Reviews, $ionicModal) {
  $scope.food = Food_detail.get({foodId: $stateParams.foodId});
  $scope.comments = Reviews.query();
  // Load the modal from the given template URL
  $ionicModal.fromTemplateUrl('/templates/comments-modal.html', function($ionicModal) {
    $scope.modal = $ionicModal;
  }, {
    // Use our scope for the scope of the modal to keep it simple
    scope: $scope,
    // The animation we want to use for the modal entrance
    animation: 'slide-in-up'
  });
  $scope.open = function(){
    $scope.modal.show();
  }
  $scope.insertComment = function(comments, Comment){
    var req = {
      method: 'POST',
      url: '/detail/comment',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: 'username='+encodeURIComponent("Sean Moon")+'&comments='
      +encodeURIComponent(comments)+'&snack_id='+encodeURIComponent($scope.food.ref_id)+
      '&grade='+encodeURIComponent("5")+'&userid='+encodeURIComponent("Sean-Moon")
    }
    $http(req).then(function(){
      //success
    }, function(){
      //fail
    });
  }
})
.controller('ReviewListController', function($scope,Reviews) {
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
