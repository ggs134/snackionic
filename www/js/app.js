angular.module('directory', ['ionic', 'directory.controllers', 'directory.services'])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

/*    .config(function($ionicConfigProvider) {
$ionicConfigProvider.tabs.position('bottom');
})*/

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/food-home.html',
        controller: 'FoodListController'
      }
    }
  })
  .state('tab.home-search', {
    url: '/home/:foodName',
    views: {
      'tab-home': {
        templateUrl: 'templates/food-home.html',
        controller: 'FoodListController'
      }
    }
  })
  .state('tab.home-detail', {
    url: '/home/:foodId/detail',
    views: {
      'tab-home':{
        templateUrl: 'templates/food-detail.html',
        controller: 'FoodDetailController'
      }
    }
  })

  /*Review Page*/
  .state('tab.review', {
    url: '/review',
    views: {
      'tab-review': {
        templateUrl: 'templates/review.html',
        controller: 'ReviewListController'
      }
    }
  })

  /*dictionary of Ingredients*/
  .state('tab.dic', {
    url: '/dic',
    views: {
      'tab-dic': {
        templateUrl: 'templates/dic.html'/*,
        controller: ''*/
      }
    }
  })
  .state('tab.dic-danger', {
    url: '/dic/danger',
    views: {
      'tab-dic': {
        templateUrl: 'templates/dic-danger.html'/*,
        controller: ''*/
      }
    }
  })

  .state('tab.sfa', {
    url: '/sfa',
    views: {
      'tab-sfa': {
        templateUrl: 'templates/sfa.html'/*,
        controller: ''*/
      }
    }
  })

  .state('tab.my', {
    url: '/my',
    views: {
      'tab-my': {
        templateUrl: 'templates/my.html',
        controller: 'MyController'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/home');
});
