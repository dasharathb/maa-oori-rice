'use strict';
angular.module('morApp')
.controller('menuCntr', ['$rootScope', '$scope', '$location',
	function ($rootScope, $scope, $location) {
	$scope.placeorder=function(){
			console.log('this tutor menuCntr  directive controller');
			$location.path('/placeorder');
    }
}]);