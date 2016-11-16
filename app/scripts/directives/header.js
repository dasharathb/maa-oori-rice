'use strict';
angular.module('morApp')
.directive('headerDtl',[function(){
	return{
		scope:{

		},
		restrict:'EA',
		templateUrl:'views/templates/header.html',
		controller:'LCntl',
		replace:true,
		link : function(scope, element, attrs){
			console.log("this is header");
		}
	}
}])