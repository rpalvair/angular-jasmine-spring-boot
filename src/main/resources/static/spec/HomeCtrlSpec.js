describe("Player", function() {


  beforeEach(module('Hello'));

var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

describe("HomeCtrl",function() {

    it("first test",function() {
    expect($scope.strength).toEqual('strong');
    });

});

});
