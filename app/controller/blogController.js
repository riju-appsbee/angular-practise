'use strict';

/**
 * @ngdoc function
 * @name angularStartUpApp.controller:blogController
 * @description
 * # blogController
 * Controller of the angularStartUpApp
 */


angular.module('angularStartUpApp')
	.controller('blogController', ["$scope", "$window", "$http", "$location", "$localStorage", "$timeout", "$routeParams", "blogService",
		function($scope, $window, $http, $location, $localStorage, $timeout, $routeParams, blogService) {
			
			$scope.totalItems = 64;
			$scope.currentPage = 1;
			$scope.pageChanged = function() {
				console.log('Page changed to: ' + $scope.currentPage);
			};		
			
			
			$scope.blog = {};
			$scope.allBlogs = {};
			$scope.categories = {};
			$scope.userName = '';	

			//Redirect if user is not logged in
			if ($localStorage.id == undefined || $localStorage.id <= 0) {
				$location.path('/superadmin/login');
			}else{
				$scope.userName = $localStorage.name;				
			}
			
			//Fetching list of blogs
			$scope.populateBlogs = function(){
				
				// console.log(blogService.populateBlogs());
				var response = blogService.populateBlogs();
				if(response.status == true){
					$scope.allBlogs = response.data;
					// response.categories.unshift({id:'',name:'--Select A Category--'});
					$scope.categories = response.categories;
					angular.forEach($scope.allBlogs, function(value, key) {
					  angular.forEach($scope.categories, function(v, k) {
						if(v.id==value.categoryID){
							$scope.allBlogs[key].category = v.name;
						}
					  });
					  
					  // console.log(key + ': ' + value.categoryID);
					});
					
				}else{
					console.log(response.message);
					alert(response.message);						
				}
				// $scope.blog.categoryDetails = response.categories[0];
				
				/*
				blogService.populateBlogs().then(function(data) {
					// var response = data.data;
					// console.log(response);
					// if(response.status == true){
					// }else{						
					// }
				});
				*/
			};
			
			//Insert a new blog
			$scope.addBlog = function() {
				console.log("addBlog Called!", $scope.blog);
				
				
				// blogService.addBlog($scope.blog).then(function(data) {
					// // console.log("Response : ", data.data);
					// var response = data.data;
					// if(response.status == true){
				$location.path("/superadmin/viewBlog");
				$location.replace();
					// }else{
						// console.log(response.message.code);
						// alert(response.message.code);
						
					// }
				// });
				
			};
			
			//Update blog details by ID
			$scope.updateBlog = function() {
				console.log("updateBlog Called!", $scope.blog);
				
				
				// blogService.updateBlog($scope.blog).then(function(data) {
					// // console.log("Response : ", data.data);
					// var response = data.data;
					// if(response.status == true){
				$location.path("/superadmin/viewBlog");
				$location.replace();
					// }else{
						// console.log(response.message.code);
						// alert(response.message.code);
						
					// }
				// });
				
			};
			
			//Delete a blog by its ID
			$scope.deleteBlog = function(id){
				// console.log(id);return;
				if($window.confirm("Are you sure?")){
					angular.forEach($scope.allBlogs, function(value, key) {
						if(value.id==id){
							$scope.allBlogs.splice(key,1);
						}
					});					
				}
				
					// blogService.deleteBlog(id).then(function(data) {
						// var response = data.data;
						// if(response.status == true){
							// console.log(response.message);
							// alert(response.message);
							// $scope.populateBlogs();
						// }else{
							// console.log(response.message.code);
							// alert(response.message.code);
							
						// }
					// });
				
			};
			
			//Fetch blog details by ID
			$scope.fetchBlogById = function(id){
				// console.log(id);return;
				$scope.blog.categoryDetails = $scope.categories[0];
					angular.forEach($scope.allBlogs, function(value, key) {
						if(value.id==id){
							$scope.blog = value;
							angular.forEach($scope.categories,function(v,k){
								if(v.id==value.categoryID){
									$scope.blog.categoryDetails = $scope.categories[k];
								}
							});
							
						}
					});					
			};
			
			//Controller initialized
			$scope.init = function(){
				angular.element('body').removeClass('login-img3-body');
				$scope.populateBlogs();
				//Edit page only
				if($routeParams.id){
					$scope.fetchBlogById($routeParams.id);
				}
			}
			$scope.init();
			

		}
	]);