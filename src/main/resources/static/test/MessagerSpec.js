"use strict";

describe("Messager", function() {
 var messager, httpBackend, log;

  beforeEach(module("Hello"));

  beforeEach(inject(function (_messager_, $httpBackend, _$log_) {
    messager = _messager_;
    httpBackend = $httpBackend;
    log = _log_;
  }));

  it("getMessage",function() {
    var message =  messager.getMessage();
    $log.debug("message = "+message);
  });
});