'use strict';
angular.module('morApp')
.controller('orderItemCntr', ['$scope','$rootScope','$location',
	function($scope, $rootScope, $location){
	console.log('this is a place Order controller............');
	$scope.Edit = function(){
		$location.path('/placeorder')
	}
}])