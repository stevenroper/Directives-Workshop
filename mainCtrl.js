var app = angular.module('directiveWorkshop', ['myDirectives']);

app.controller('mainCtrl', function($scope, mainService){

	$scope.getData = function () {
    return mainService.getData($scope.query).then(function (data) {
       return $scope.data = data;
    });
	};

});