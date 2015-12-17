helloApp.factory('messager',['$log','$http',function($log,$http) {
    var message = "Missing";

    var setMessage = function(value) {
          message = value;
    }
    var getMessage =  function() {
        return message;
    };

    var getAllMessages = function() {
        $http.get('/getAllMessages').then(function(response) {
        var messages = response.data;
        $log.debug("messages = "+angular.toJson(messages));
        angular.forEach(messages, function(value, key) {
            $log.debug("message = "+angular.toJson(value));
        });
        }, function(response) {
            $log.debug("response = "+angular.toJson(response));
        });
    };

    return {
        setMessage : setMessage,
        getMessage : getMessage,
        getAllMessages : getAllMessages
    }
}]);