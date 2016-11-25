'use strict';
angular.module('morApp')
.controller('Hcntl',['$scope','hFactory',
	function($scope,hFactory){

	
	$scope.h=function(){
		console.log("this is hello controller");
		var dtl = {};
		dtl.name= $scope.t;
		hFactory.getDtl(dtl).then(function(result){
			console.log('this is controlle factory');
		});
	}

}]);