'use strict';

/**
 * @ngdoc function
 * @name angularStartUpApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularStartUpApp
 */


angular.module('angularStartUpApp')
	.controller('dashboardController', ["$scope", "$http", "$location", "$localStorage", "$timeout", 
		function($scope, $http, $location, $localStorage, $timeout) {
			
			$scope.userName = '';

			//Redirect if user is not logged in
			if ($localStorage.id == undefined || $localStorage.id <= 0) {
				$location.path('/superadmin/login');
			}else{
				$scope.userName = $localStorage.name;
				
			}
			
			angular.element('body').removeClass('login-img3-body');

			//For the time being used to display jquery functions related with the map
			$timeout(function() {
				
				//knob
	      
		        $(".knob").knob({
		          'draw' : function () { 
		            $(this.i).val(this.cv + '%')
		          }
		        })
	      

	      		//carousel
	      
				$("#owl-slider").owlCarousel({
				  navigation : true,
				  slideSpeed : 300,
				  paginationSpeed : 400,
				  singleItem : true

				});
	      

	  			//custom select box

	      
				$('select.styled').customSelect();
	      
		  
				/* ---------- Map ---------- */
		
				$('#map').vectorMap({
				map: 'world_mill_en',
				series: {
				  regions: [{
				    values: gdpData,
				    scale: ['#000', '#000'],
				    normalizeFunction: 'polynomial'
				  }]
				},
				backgroundColor: '#eef3f7',
				onLabelShow: function(e, el, code){
				  el.html(el.html()+' (GDP - '+gdpData[code]+')');
				}
				});
				
				
				
	
			},0);

		}
	]);