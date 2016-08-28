'use strict';

/**
 * @ngdoc function
 * @name angularStartUpApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularStartUpApp
 */


angular.module('angularStartUpApp')
	.controller('loginController', ["$scope", "$http", "$location", "$localStorage", "$timeout", "loginService",
		function($scope, $http, $location, $localStorage, $timeout, loginService) {
			$scope.user = {};
			//Redirect if user has already logged in
			if($localStorage.id > 0){
				$location.path('/superadmin/dashboard');
			}
			
			//Check and redirect according to log in
			$scope.doLogin = function() {
				// console.log("doLogin Called!", $scope.user);return;
				
				loginService.login($scope.user).then(function(data) {
					// console.log("Login Response : ", data.data);return;
					var response = data.data;
					// console.log("response:",response);
					if(response.status == true){
						
						$localStorage.id = response.details.id;
						$localStorage.name = response.details.name;
						$location.path("/superadmin/dashboard");
						$location.replace();
					}else{
						console.log(response);
						alert(response.error);
						
					}
				});
				
			};
			

			
			


		}
	]);