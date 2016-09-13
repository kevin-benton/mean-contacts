'use strict';

angular.module('core.contact').factory('Contact', ['$resource',
  function($resource) {
    return $resource('/api/contacts/:contactId', {}, {
        query: {
          method: 'GET',
          params: {phoneId: ''},
          isArray: true
        }
    });
  }
]);
