'use strict';


angular.module('angularStartUpApp')
	.factory('loginService', ["$http", "$localStorage","$location",
		function($http, $localStorage, $location) {
			var returnObj = {
				login: function(userCredentials) {
					// console.log("credentials : ", userCredentials);
					return $http.post('http://localhost/demo/api/', userCredentials,{headers:{'Content-Type':'application/json'}});
					
				},
				logout: function() {
						$localStorage.$reset();
						$location.path('/');

					},
			}
			return returnObj;
		}
]);