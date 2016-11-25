'use strict';

angular.module('morApp')
.factory('regFactory', ['$http','$q', function( $http, $q ){
	var regFactory = {};

		regFactory.getRegDetailes = function(){

			var defer = $q.defer();

			var serviceURI = './json/register.json';
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


	return regFactory;
}]);