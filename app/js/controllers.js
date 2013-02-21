function EmptyController() {

}

function SpinnerController($scope, $timeout, SpinnerService) {
	$scope.msg = 'Loading lots of data';
	SpinnerService.show('loading...');
	$timeout(function() {
		SpinnerService.text('still loading...');
	}, 1500);
	$timeout(function() {
		$scope.msg = 'All done!';
		SpinnerService.close();
	}, 2000);
}

function iPhoneController() {

}