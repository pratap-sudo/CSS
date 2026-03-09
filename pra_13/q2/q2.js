var app = angular.module("studentApp", []);

app.controller("studentController", function ($scope) {

    $scope.students = [
        { name: "Rahul", marks: 85 },
        { name: "Amit", marks: 90 },
        { name: "Sneha", marks: 78 },
        { name: "Kiran", marks: 88 }
    ];

});