'use strict';

angular.module('contactDetail').component('contactDetail', {
    templateUrl: 'contact-detail/contact-detail.template.html',
    controller: ['$routeParams', 'Contact',
    function ContactDetailController($routeParams, Contact) {
        this.contactId = $routeParams.contactId;
        this.contact = Contact.get({contactId: this.contactId}, function(contact) {});
    }]
});
