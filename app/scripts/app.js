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
        .when('/more2', {
            templateUrl: 'views/templates/moreProDtls2.html',
            controller: 'moreDtlsCntr'
        })
        .when('/more3', {
            templateUrl: 'views/templates/moreProDtls3.html',
            controller: 'moreDtlsCntr'
        })
	    .when('/itemdetails', {
            templateUrl: 'views/templates/orderItemDtls.html',
            controller: 'orderItemCntr'
        })
        .when('/registration', {
            templateUrl: 'views/templates/userReg.html',
            controller: 'userRegCntr'
        })
        .when('/login', {
            templateUrl: 'views/templates/login.html',
            controller: 'loginCntr'
        })
        .when('/account', {
            templateUrl: 'views/templates/account.html',
            controller: 'accountCntrl'
        })
        .when('/orderHistory', {
            templateUrl: 'views/templates/orderHistory.html',
            controller: 'orderHistoryCntrl'
        })
        .when('/trackMyOrder', {
            templateUrl: 'views/templates/trackMyOrder.html',
            controller: 'placeOrderCntr'
        })
        .when('/adminOrderDetails',{
            templateUrl: 'views/templates/adminOrderDetails.html',
            controller: 'admainCntrl'
        })
        .when('/todayOrders',{
            templateUrl: 'views/templates/todayOrders.html',
            controller: 'todayCntrl'
        })
        .when('/configuration',{
            templateUrl: 'views/templates/configuration.html',
            controller: 'configueCntrl'
        })
        .when('/regSucessPage/:msg',{
            templateUrl: 'views/templates/regSucessPage.html',
            controller: 'regSucessCntr'
        })
        .otherwise({
            redirectTo: '/error'
        });
    }
]);
