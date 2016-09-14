'use strict';

angular.module('contactsApp').config(['$locationProvider' ,'$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
      when('/contacts', {
        template: '<contact-list></contact-list>'
      }).
      when('/contacts/:contactId', {
        template: '<contact-detail></contact-detail>'
      }).
      when('/contacts/save/:contactId', {
        template: '<contact-save></contact-save>'
      }).
      otherwise('/contacts');
  }
]);
