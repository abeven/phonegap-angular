'use strict';

angular.module('pgng.demo', ['pgng.directives', 'pgng.services']).
	config(function($routeProvider) {
		$routeProvider.when('/', {templateUrl: 'partials/index.html', controller:EmptyController});              
		$routeProvider.when('/simple', {templateUrl: 'partials/simple.html', controller: EmptyController});
		$routeProvider.when('/footer', {templateUrl: 'partials/footer.html', controller: EmptyController});
		$routeProvider.when('/tabs', {templateUrl: 'partials/tabs.html', controller: EmptyController});
		$routeProvider.when('/scroll', {templateUrl: 'partials/scroll.html', controller: EmptyController});
		$routeProvider.when('/centermiddle', {templateUrl: 'partials/centermiddle.html', controller: EmptyController});
		$routeProvider.when('/spinner', {templateUrl: 'partials/spinner.html', controller: SpinnerController});              
		$routeProvider.when('/iphone', {templateUrl: 'partials/iphone.html', controller: iPhoneController});
		$routeProvider.otherwise({redirectTo: '/'});
});

