'use strict';

/**
 * @ngdoc overview
 * @name morApp
 * @description
 * # morApp
 *
 * Main module of the application.
 */
angular.module('morApp', [
    'config',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
])
.run(['$window', '$rootScope', '$location', '$route', '$routeParams', 
  function($window, $rootScope, $location, $route, $routeParams){
     
        $rootScope.$on('$routeChangeSuccess', function(event, next, current) {
                 
        });
        $rootScope.$on('$routeChangeError', function (event, next, current, rejection) {
            
        });
  }
])
.config(['$routeProvider', '$compileProvider', '$locationProvider',
    function ($routeProvider, $compileProvider, $locationProvider) {
        
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|qto):/);
        //$locationProvider.html5Mode(true); 

        $routeProvider
        .when('/', {
            templateUrl: 'views/templates/home.html',
            controller: 'homeCntr'
        })
        .when('/product', {
            templateUrl: 'views/templates/productDtls.html',
            controller: 'proDtlCntr'
        })
        .when('/more', {
            templateUrl: 'views/templates/moreProDtls.html',
            controller: 'moreDtlsCntr'
        })
	.when('/placeorder', {
            templateUrl: 'views/templates/placeorder.html',
            controller: 'placeOrderCntr'
        })
        .otherwise({
            redirectTo: '/error'
        });
    }
]);
