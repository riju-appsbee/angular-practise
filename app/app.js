'use strict';

/**
 * @ngdoc overview
 * @name angularStartUpApp
 * @description
 * # angularStartUpApp
 *
 * Main module of the application.
 */
angular
	.module('angularStartUpApp', [
		'ui.bootstrap',
		'ngAnimate',
		// 'ngCookies',
		// 'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch',
		'ngStorage',
		'ui.router'
	])
	.config(function($routeProvider, $httpProvider, $compileProvider, $stateProvider, $urlRouterProvider) {   
		// $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:image\//);

		$routeProvider
			.when('/', {
				templateUrl: 'app/views/login.html',
				controller: 'loginController',
				// resolve:{setBG:["$scope",
						// function($scope) {
							// $scope.loginBody = true;
						// }
					// ]}
			})
			.when('/superadmin/dashboard', {
				templateUrl: 'app/views/dashboard.html',
				controller: 'dashboardController',
				// resolve:{setBG:function(){$scope.loginBody=false;}}
			})
			.when('/superadmin/addBlog', {
				templateUrl: 'app/views/addBlog.html',
				controller: 'blogController',
				controllerAs: 'BlogCtrl'
			})
			.when('/superadmin/viewBlog', {
				templateUrl: 'app/views/viewBlog.html',
				controller: 'blogController',
				controllerAs: 'BlogCtrl'
			})
			.when('/superadmin/editBlog/:id', {
				templateUrl: 'app/views/editBlog.html',
				controller: 'blogController',
				controllerAs: 'BlogCtrl'
			})
			
			// .when('/superadmin/login', {
			// 	templateUrl: 'views/login.html',
			// 	controller: 'loginController',
			// 	controllerAs: 'LoginCtrl'
			// })
			// .when('/superadmin/yearstream/:orgID', {
			// 	templateUrl: 'views/yearstream.html',
			// 	controller: 'yearstreamController',
			// 	controllerAs: 'StreamCtrl'
			// })										
			.when('/superadmin/logout', {
				resolve: {
					details: ["loginService",
						function(loginService) {
							loginService.logout();	
							angular.element('body').addClass('login-img3-body');
						}
					]
				}
			})
			.otherwise({
				//redirectTo: '/'
				resolve: {
					redirect: function(){window.location.href = 'http://localhost/demo/404.html';}
				}
			});


			$httpProvider.defaults.headers.common = {};
			$httpProvider.defaults.headers.post = {};
			$httpProvider.defaults.headers.put = {};
			$httpProvider.defaults.headers.patch = {};
	})
	
;
	
	