'use strict';

angular.module('core.contact').factory('Contact', ['$resource',
function($resource) {
    return $resource('/api/contacts/:contactId', {}, {
        update: {
            method: 'PUT'
        }
    });
}]);
