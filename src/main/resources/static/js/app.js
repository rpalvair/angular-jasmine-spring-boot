var helloApp = angular.module('Hello',['ngRoute']);

helloApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      when('/angular', {
        templateUrl: 'partials/angular.html',
        controller: 'AngularCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

  helloApp.controller('HomeCtrl',['$scope','messager','$log',function($scope,$messager,$log) {
  $scope.message =null;
    $scope.initHome = function() {
      $log.debug("init home");
      $log.debug("message = "+$messager.getMessage());
      $messager.setMessage("Hello widdy!");
      $log.debug("message = "+$messager.getMessage());
      $messager.getAllMessages();
    };
    $scope.sayHello = function() {
    $scope.message =  "Hello";}
  }]);

  helloApp.controller('AngularCtrl', function($scope) {
    $scope.initAngular = function() {
        console.log("init angular");
    }
    $scope.cities = [{name:"Paris"}, {name:"London"}];
  });

  helloApp.factory('interceptor',['$q','$log',function($q,$log){
    return {
        // optional method
        'request': function(config) {
          // do something on success
          $log.debug("config = "+angular.toJson(config));
          config.headers['x-my-token'] = "a token";
          return config;
        },
        'response': function(response) {
            $log.debug("response = "+angular.toJson(response));
            return response;
        }
      };
  }]);

  helloApp.config(['$httpProvider', function($httpProvider) {
      $httpProvider.interceptors.push('interceptor');
  }]);