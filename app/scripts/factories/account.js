'use strict';
angular.module('morApp')
.factory('accountFact',['$http','$q','$location','getServiceURI',function($http,$q,$location,getServiceURI){
	var accountFact = {};
	accountFact.getUserDetails=function(emailId){


		var defer = $q.defer();
		var serviceURI = getServiceURI.build('mor', 'account');

		$http({
				method: 'GET',
				url: serviceURI,
				params:	{
					emailId:emailId
					}
			}).then(function(data){
				console.log('factory :::account:: ');
				console.log('factory :::1:: ',data.data);
				defer.resolve(data.data);
			},
			 function(failedReason){
			 	console.log('failedReason :::: ',failedReason);						
				defer.reject(failedReason);
			});
					
			return defer.promise;
		};
	

	return accountFact;

}]);