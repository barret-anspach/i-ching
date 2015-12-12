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
        controller: 'iChingCtrl as ic'
      })
      .state('consult.consider', {
        url: '/consider',
        templateUrl: 'app/main/consult.consider.tpl.html'
      })
      .state('consult.result', {
        url: '/result?:hexId&hexCl',
        templateUrl: 'app/main/consult.result.tpl.html',
        controller: 'HexagramCtrl as hex'
      })
      .state('consult.furtherStudy', {
        url: '/furtherStudy',
        templateUrl: 'app/main/consult.furtherStudy.tpl.html'
      })
    ;

    $urlRouterProvider.otherwise('/');
  })

  .run(function(){
    //Parse.initialize("69VyY3XiWlAzccXb1Ox7NSC0oy05P65SmmyQ1lod", "DpeVZwARY1Oh5Gao6TzwLqCvwtTvUAxG1ZbWyl69");
  })

  .run(function($rootScope, $state){
    //$rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
    //  $rootScope.toState = toState;
    //  //window.console.log('to state:', toState);
    //});
    //$rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams){
    //  //window.console.log('state', $state.current.name);
    //});
  })
;
