'use strict';

angular.module('contactSave').component('contactSave', {
    templateUrl: 'contact-save/contact-save.template.html',
    controller: ['$routeParams', '$location', 'Contact',
    function ContactAddController($routeParams, $location, Contact) {
        this.contactId = $routeParams.contactId;
        this.contact = Contact.get({contactId: this.contactId});

        this.save = function() {
            if (this.contactId === '0') {
                Contact.save(this.contact);
                $location.path('#!/contacts');
            } else {
                Contact.update({ contactId: this.contactId }, this.contact);
                $location.path('#!/contacts/' + this.contactId);
            }
        }

        this.delete = function() {
            Contact.delete({contactId: this.contactId});
            $location.path('#!/contacts');
        }
    }]
});
