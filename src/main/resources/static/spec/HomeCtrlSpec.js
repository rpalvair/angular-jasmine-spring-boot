describe("HomeCtrl", function() {


  beforeEach(module('Hello'));

var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

describe("$scope.message",function() {

    it("first test",function() {
         var $scope = {};
          var controller = $controller('HomeCtrl', { $scope: $scope });
          $scope.sayHello();
    expect($scope.message).toEqual('Hello');
    });

});

});
