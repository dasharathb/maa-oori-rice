'use strict';

angular.module('morApp')
.factory('orderHistoryFact', ['$http','$q','getServiceURI','$location', function( $http, $q ,getServiceURI,$location){
	var orderHistoryFact = {};

		orderHistoryFact.getOrderHistoryDtl = function(emailId){

			var defer = $q.defer();
			var serviceURI = getServiceURI.build('mor', 'orderHistory');

			//var serviceURI = './json/placeOrder.json';
			$http({
				method: 'GET',
				url: serviceURI,
				params:{
                  emailId:emailId
				}
				
			}).then(function(data){
				console.log('factory :::22222222222222 ',data);
				defer.resolve(data.data);
			},
			 function(failedReason){						
				defer.reject(failedReason);
			});
		
			return defer.promise;
		};


	return orderHistoryFact;
}]);

