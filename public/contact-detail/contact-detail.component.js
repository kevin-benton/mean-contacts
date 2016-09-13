'use strict';

angular.module('contactDetail').component('contactDetail', {
    templateUrl: 'contact-detail/contact-detail.template.html',
    controller: ['$routeParams', 'Contact',
    function ContactDetailController($routeParams, Contact) {
        this.contact = Contact.get({contactId: $routeParams.contactId}, function(contact) {});
    }]
});
