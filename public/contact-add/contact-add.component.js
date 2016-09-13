'use strict';

angular.module('contactAdd').component('contactAdd', {
    templateUrl: 'contact-add/contact-add.template.html',
    controller: ['$location', 'Contact',
    function ContactAddController($location, Contact) {
        this.save = function() {
            Contact.save({
                firstName: this.firstNameText,
                lastName: this.lastNameText
            });

            $location.path('#!/contacts');
        }
    }]
});
