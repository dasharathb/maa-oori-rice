'use strict';
angular.module('morApp')
.controller('admainCntrl',['$scope','$location',
	function($scope,$location){
		console.log("setting controller");

		$scope.todayOrder=function(){
			console.log('this is today order');
			$location.path('/todayOrders');
		}
		$scope.configue=function(){
			console.log('this is configue ');
			$location.path('/configuration');
		}

}]);