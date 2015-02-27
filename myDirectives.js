var app = angular.module('myDirectives', []);

app.directive('pending', function() {
	return {
		restrict: 'A',
		scope: {
			request: '&',
			searchTerm: '='
		},
		link: function(scope, elem, attrs) {
			console.log(scope.searchTerm);
			elem.bind('click', function() {
				elem.prop('disabled', true);
				console.log(scope.searchTerm)
			});

		}
	}

});