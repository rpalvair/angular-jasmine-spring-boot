helloApp.factory('messager',['$log',function(log) {
    var message = "Missing";

    var setMessage = function(value) {
          message = value;
    }
    var getMessage =  function() {
        return message;
    };

return {
    setMessage : setMessage,
    getMessage : getMessage
}
}]);