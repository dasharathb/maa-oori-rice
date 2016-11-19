'use strict';

angular.module('morApp')
.controller('homeCntr',['$scope', '$rootScope','$location',
	function($scope, $rootScope, $location){
	console.log('hello this is home page controller...');
    $scope.Register = function(){
		$location.path('/registration');
	}
	
}]); 