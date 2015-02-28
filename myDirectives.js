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
					elem.prop('disabled', false);
					angular.element('#spinner').hide();
					scope.searchTerm = '';
					console.log(data.data.results);
				});
			});

		}
	}

});

app.directive('notify', function() {
	return {
		restrict: 'A',
		scope: {
			title: '=',
			body: '=',
			iconUrl: '='
		},
		link: function(scope, elem, attrs) {
			var Notification = window.Notification || window.mozNotification || window.webkitNotification;
  		Notification.requestPermission(function (permission) {
				//console.log(permission);
      });

			elem.bind('click', function() {
				var notifcication = new Notification(scope.title, {body: scope.body, icon: scope.iconUrl});
				scope.title = '';
				scope.body = '';
				scope.iconUrl = '';
			});
		}
	};
});