'use strict';

angular.module('contactList').component('contactList', {
    templateUrl: 'contact-list/contact-list.template.html',
    controller: ['Contact',
    function ContactListController(Contact) {
        this.contacts = Contact.query();
    }]
});
