'use strict';
angular.module('morApp')
.controller('placeOrderCntr', ['$scope','$rootScope', '$location', 'pOrderFactory','accountFact',
	function($scope, $rootScope, $location, pOrderFactory,accountFact){
	console.log('this is a place Order controller............');

//	$scope.Submit = function(){
//		$location.path('/itemdetails')
//	}
$scope.placeOrder=[];
    $scope.save = function(){

    	 	var place ={}
			place.riceType=$scope.riceType;
    	   	place.quantity=$scope.quantity;
			console.log('place::::: ',place);	
    		$scope.placeOrder.push(place);
    	}
    $scope.submit = function(){
    
    	console.log('this is a place Order controller..1111111111111..........');
    	/*$('#mytable tr').each(function() {
           var customerId = $(this).find("td").eq(2).html();    
});*/
			$("td[data-column='"+2+"']")
    	
    }	

	$scope.getOrderDetailes = function(){
		accountFact.getUserDetails($rootScope.emailId).then(function(data){
			console.log('controller ::::: ',data);
			 $scope.accDtl = data;
		});
	}
   $scope.init = function(){
		$scope.getOrderDetailes();
	}

	$scope.init();
	
}]);
