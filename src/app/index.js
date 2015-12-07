'use strict';

angular.module('iChing', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html'
      })
      .state('consult', {
        abstract: true,
        url: '/consult',
        template: '<div ui-view></div>',
        controller: 'IChingCtrl',
        controllerAs: 'ic'
      })
      .state('consult.consider', {
        url: '/consider',
        templateUrl: 'app/main/consult.consider.tpl.html'
      })
      .state('consult.results', {
        url: '/results',
        templateUrl: 'app/main/consult.results.tpl.html'
      })
      .state('consult.furtherStudy', {
        url: '/furtherStudy',
        templateUrl: 'app/main/consult.furtherStudy.tpl.html'
      })
    ;

    $urlRouterProvider.otherwise('/');
  })

  .run(function($rootScope, $state){
    $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
      $rootScope.toState = toState;
      window.console.log('to state:', toState);
    });
    $rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams){
      window.console.log('state', $state.current.name);
    });
  })
;
