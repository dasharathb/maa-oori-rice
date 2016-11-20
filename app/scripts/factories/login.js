'use strict';

angular.module('morApp')
.factory('loginFactory', ['$http', '$location', '$q', 'getServiceURI', function( $http, $location, $q, getServiceURI ){
	var loginFactory = {};

		loginFactory.loginUser = function(loginDtl){

			var defer = $q.defer();
			console.log('factory ::: ',loginDtl);
			//	var serviceURI = 'http://localhost:9010/maa-oori-rice/login';
			var serviceURI = getServiceURI.build('mor', 'login');

					/*if($location.host() === 'localhost'){
						if($location.port() === 9000){
							serviceURI = 'json/is-admin.json';
						}
					}*/
			$http({
				method: 'GET',
				url: serviceURI,
				params:	{"userName":loginDtl.userName, "password": loginDtl.password},
				headers : {'Content-Type': 'application/json'}
			})
			.then(function(data){
				console.log('factory ::: ',data);
				defer.resolve(data.data);
			},
			 function(failedReason){						
				defer.reject(failedReason);
			});
			/*
			$http.POST(serviceURI, loginDtl )
			.seccess(function(data){
				console.log('factory ::: ',data);
				defer.resolve(data.data);
			})
			.error(function(failedReason){						
				defer.reject(failedReason);
			});*/
		
			return defer.promise;
		};


	return loginFactory;
}]);