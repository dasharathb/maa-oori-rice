'use strict'
angular.module('morApp')
.directive('footerDtl',[function(){

	return{
		scope:{

		},
		restrict:'EA',
		templateUrl:'views/templates/footer.html',
		controller:'fCntl',
		replace:true,
		link : function(scope, element, attrs){
			console.log("this is header");
		}
	}
}])