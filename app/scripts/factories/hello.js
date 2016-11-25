'use strict';
angular.module('morApp')
.factory('hFactory',['$http','$q','getServiceURI',function($http,$q,getServiceURI){
	var hFactory = {};
	hFactory.getDtl=function(dtl){
		var defer = $q.defer();
		var serviceURI = getServiceURI.build('mor', 'hello');
		$http({
				method: 'GET',
				url: serviceURI,
				params:	{
					details:dtl
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


	return hFactory;
}]);
