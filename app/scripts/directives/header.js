'use strict';
angular.module('morApp')
.directive('headerDtl',[function(){
	return{
		scope:{
			loginUserName:'=',
			isLoggedIn:'=',
			isAdmin:'='
		},
		restrict:'EA',
		templateUrl:'views/templates/header.html',
		controller:'headerCntl',
		replace:true,
		link : function(scope, $rootScope, element, attrs, headerCntl){
			console.log(scope.isAdmin," ....this is header...............",$rootScope.loginUserName);
		}
		
	}
}])