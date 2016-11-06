'use strict';
angular.module('morApp')
.controller('fCntl',['$scope',function($scope){
	 $scope.footerDate = new Date();
	$scope.comment=function(){
		console.log('this is comment controller.............');
		$('#confirmModal').modal({show : true,backdrop : false});

	}
	 $scope.close=function(){
      	$('#confirmModal').modal('hide');
      }

      $scope.submit=function(){
      	$('#confirmModal').modal('hide');
      }

}]);