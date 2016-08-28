'use strict';


angular.module('angularStartUpApp')
	.factory('blogService', ["$http", 
		function($http) {
			var returnObj = {
				addBlog: function(blogs) {
					
					return $http.post('http://localhost/api/addBlog/', blogs,{headers:{'Content-Type':'application/json'}});
					
				},
				populateBlogs: function() {
					
					// return $http.post('http://localhost/api/viewBlogs');
					var response = {status:true,categories:[{id:1,name:'sports'},{id:2,name:'movie'},{id:3,name:'business'}],data:[{id:1,title:'1st blog',description:'something about sports',categoryID:1},{id:2,title:'2nd blog',description:'something about business',categoryID:3}]};
					return response;
					
					
				},
				deleteBlog: function(id) {
					
					// return $http.post('http://localhost/api/deleteBlog',{'id':id},{headers:{'Content-Type':'application/json'}});
					
				}
				
			}
			return returnObj;
		}
]);