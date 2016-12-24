'use strict';

angular.module('morApp')
.factory('pOrderFactory', ['$http','$q','getServiceURI','$location', function( $http, $q ,getServiceURI,$location){
	var pOrderFactory = {};

		pOrderFactory.getOrderDetailes = function(emailId){
			console.log('this is a place Order factory............');

			var defer = $q.defer();
			var serviceURI = getServiceURI.build('mor', 'placeorder');

			//var serviceURI = './json/placeOrder.json';
			$http({
				method: 'GET',
				url: serviceURI,
				params:	{
					placeorder:placeorder
					}
			})
			.then(function(data){
				console.log('factory ::: ',data);
				defer.resolve(data.data);
			},
			 function(failedReason){						
				defer.reject(failedReason);
			});
		
			return defer.promise;
		};


	return pOrderFactory;
}]);