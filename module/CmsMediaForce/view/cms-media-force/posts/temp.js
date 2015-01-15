
CmsApp.controller('ArquivosCtrl', ['$scope',  function ( $scope ) {
	
	$scope.checked_expirar = true;

	$scope.data_expirar = '';

	$scope.formIsInvalid = true;

	var checked = false

	$scope.$watch('checked_expirar', function (scope) {

		if ( scope ) {

			$scope.post.expiresAt.$setValidity('required', true);

		} else {
			
			if ( $scope.expiresAt == 'undefined' || $scope.expiresAt == null) {

				$scope.post.expiresAt.$setValidity('required', false);
			} else {
				$scope.data_expirar = $scope.post.expiresAt;
				$scope.post.expiresAt.$setValidity('required', true);
			}
		}

	});

	$scope.$watch('post.$invalid', function (scope) {
		$scope.formIsInvalid = scope;
	})

	$scope.$watch('expiresAt', function (scope) {

		if ( scope == 'undefined' || scope == null) {

			if ( $scope.checked_expirar ) {
				if (checked) {
					$scope.post.expiresAt.$setValidity('required', false);
				}
				checked = true;
			} else {
				$scope.data_expirar = scope;
				$scope.post.expiresAt.$setValidity('required', true);
			}
			
		} else {
			$scope.data_expirar = scope;
			$scope.post.expiresAt.$setValidity('required', true);
		}

	});

/*	$scope.$watch('upload', function (scope) {
		console.log(scope);
		if ( scope == 'undefined' || scope == null) {
			$scope.post.arquivo.$setValidity('required', false);
		} else {
			$scope.post.arquivo.$setValidity('required', true);
		}

	});*/

}]);
