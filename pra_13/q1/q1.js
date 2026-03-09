var app = angular.module("myApp", []);

app.controller("myController", function ($scope) {
    $scope.message = "Hello! This message is displayed using an external controller.";
});