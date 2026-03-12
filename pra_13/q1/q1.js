var app = angular.module("myApp", []); app.controller("MessageController", function($scope) {
$scope.message = "Welcome! This message is displayed using an external controller.";
});
