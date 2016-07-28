'use strict';

angular.module('iChing', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('iChing', {
        abstract: true,
        template: '<div ui-view></div>',
        controller: 'iChingCtrl as ic'
      })
      .state('iChing.begin', {
        url: '/',
        templateUrl: 'app/main/main.html'
      })
      .state('iChing.consult', {
        abstract: true,
        template: '<div ui-view></div>',
        controller: 'ConsultCtrl as consult'
      })
      .state('iChing.consult.consider', {
        url: '/consider',
        templateUrl: 'app/main/consult.consider.tpl.html'
      })
      .state('iChing.consult.result', {
        url: '/result?:hexId&hexCl',
        templateUrl: 'app/main/consult.result.tpl.html',
        controller: 'HexagramCtrl as hex'
      })
      .state('iChing.consult.furtherStudy', {
        url: '/furtherStudy',
        templateUrl: 'app/main/consult.furtherStudy.tpl.html'
      })
    ;

    $urlRouterProvider.otherwise('/');
  })
  
  .run(function($rootScope, $state){
    $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
     $rootScope.toState = toState;
      $rootScope.fromState = fromState;
     window.console.log('to state:', toState, toParams);
    });
    $rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams){
     window.console.log('state', $state.current.name, fromParams);
    });
  })
;
