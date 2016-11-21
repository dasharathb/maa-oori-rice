'use strict';

angular.module('morApp')
.factory('loginFactory', ['$http', '$location', '$q', 'getServiceURI', function( $http, $location, $q, getServiceURI ){
	var loginFactory = {};

		loginFactory.loginUser = function(loginDtl){

			var defer = $q.defer();
			console.log('factory ::: ',loginDtl);
			
			var serviceURI = getServiceURI.build('mor', 'login');
			/*if($location.host() === 'localhost'){
				if($location.port() === 9000){
					serviceURI = 'json/is-admin.json';
				}
			}*/
			$http({
				method: 'GET',
				url: serviceURI,
				params:	{
					loginDtl:loginDtl
					}
			})
			.then(function(data){
				console.log('factory :::1:: ',data);
				defer.resolve(data.data);
			},
			 function(failedReason){						
				defer.reject(failedReason);
			});
					
			return defer.promise;
		};


	return loginFactory;
}]);