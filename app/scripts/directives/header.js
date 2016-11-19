'use strict';
angular.module('morApp')
.directive('headerDtl',[function(){
	return{
		scope:{

		},
		restrict:'EA',
		templateUrl:'views/templates/header.html',
		controller:'headerCntl',
		replace:true,
		link : function(scope, $rootScope, element, attrs, headerCntl){
			console.log("this is header...............",$rootScope.loginUserName);
		}
		
	}
}])