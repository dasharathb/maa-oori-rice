'use strict';

angular.module('morApp')
.factory('loginFactory', ['$http', '$location', '$q', 'getServiceURI', function( $http, $location, $q, getServiceURI ){
	var loginFactory = {};

		loginFactory.loginUser = function(loginDtl){

			var defer = $q.defer();
			console.log('factory ::: ',loginDtl);
			
			var serviceURI = getServiceURI.build('mor', 'login');
			//serviceURI = 'http://localhost:9010/maa-oori-rice-server/login';

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
			}).then(function(data){
				console.log('factory :::1:: ');
				console.log('factory :::1:: ',data.data);
				defer.resolve(data.data);
			},
			 function(failedReason){
			 	console.log('failedReason :::: ',failedReason);						
				defer.reject(failedReason);
			});
					
			return defer.promise;
		};


	return loginFactory;
}])
.factory('regFactory', ['$http','$q', function( $http, $q ){
	var regFactory = {};

		regFactory.userReg = function(regDtl){

			var defer = $q.defer();
			console.log('factory ::: ',regDtl);
			var serviceURI = 'http://localhost:9010/maa-oori-rice/registration';
			
			$http({
				method: 'GET',
				url: serviceURI,
				params:	{"firstName":regDtl.firstName, "lastName": regDtl.lastName,"email": regDtl.email, "phone": regDtl.phoneNumber,"address line1": regDtl.line1,"address line2": regDtl.line2,"city": regDtl.city,"state": regDtl.state,"pin": regDtl.pin},
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


	return regFactory;
}]);