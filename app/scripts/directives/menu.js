'use strict';
angular.module('morApp')
.directive('morMenu',function() {
	return{
		scope : {
			product:'=?' ,
			use:'=?'
		},
		restrict:'EA',
		templateUrl :'views/templates/menu.html',
		controller:'menuCntr',

		replace:true,
		link : function(scope, element, attrs, empCntr){
			console.log('mor MenuBar directive :::',scope.product,':::->:::',scope.use);
		}
	};
})