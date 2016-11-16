'use strict';

angular.module('morApp')
.factory('pOrderFactory', ['$http','$q', function( $http, $q ){
	var pOrderFactory = {};

		pOrderFactory.getOrderDetailes = function(){

			var defer = $q.defer();

			var serviceURI = './json/placeOrder.json';
			$http({
				method: 'GET',
				url: serviceURI
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