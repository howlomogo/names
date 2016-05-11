angular.module('app', ['ngRoute', 'ngAnimate'])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/home.html', // Home Page
        controller: 'MainCtrl'
      }).
      when('/home', {
        templateUrl: 'views/home.html', // Home Page
        controller: 'MainCtrl'
      }).
      when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      }).
      otherwise({
        redirectTo: '/404',
        templateUrl: 'views/404.html',
        controller: 'MainCtrl'
      });
  }]);