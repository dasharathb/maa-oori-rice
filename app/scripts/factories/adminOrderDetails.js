'use strict';

angular.module('morApp')
.factory('adminFact', ['$http','$q','getServiceURI','$location',
     function( $http, $q ,getServiceURI,$location){
	var adminFact = {};

		adminFact.getOrderForAdmin = function(){

			var defer = $q.defer();
			var serviceURI = getServiceURI.build('mor', 'adminOders');

			//var serviceURI = './json/placeOrder.json';
			$http({
				method: 'GET',
				url: serviceURI
				//params: {
					//status:status
				//}
			}).then(function(data){
				//console.log('factory ::: ',data);
				defer.resolve(data.data);
			},
			 function(failedReason){						
				defer.reject(failedReason);
			});

			return defer.promise;
		};

		adminFact.saveStatus = function(orderId, status){
			console.log('status......',orderId,status)

			var defer = $q.defer();
			var serviceURI = getServiceURI.build('mor', 'adminStatus');

			//var serviceURI = './json/placeOrder.json';
			$http({
				method: 'GET',
				url: serviceURI,
				params: {
					orderId:orderId,
					status:status
				}
			}).then(function(data){
				console.log('factory ::: ',data);
				defer.resolve(data.data);
			},
			 function(failedReason){						
				defer.reject(failedReason);
			});

			return defer.promise;
		};


	return adminFact;
}]);


