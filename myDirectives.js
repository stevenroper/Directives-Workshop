var app = angular.module('myDirectives', []);

app.directive('pending', function() {
	return {
		restrict: 'A',
		scope: {
			request: '&',
			searchTerm: '='
		},
		link: function(scope, elem, attrs) {
			
			elem.bind('click', function() {
				elem.prop('disabled', true);
				angular.element('#spinner').show();
				scope.request().then(function(data) {
					console.log(data);
				});
			});

		}
	}

});