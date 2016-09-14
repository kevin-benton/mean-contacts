'use strict';

describe('contactList', function() {
    beforeEach(module('contactList'));

    // Test the controller
    describe('ContactListController', function() {
        var $httpBackend, ctrl;

        var contactData = [
            { _id: 1, firstName: 'Axl', lastName: 'Rose' },
            { _id: 2, firstName: 'Slash', lastName: '' },
            { _id: 3, firstName: 'Steven', lastName: 'Adler' },
            { _id: 4, firstName: 'Izzy', lastName: 'Stradlin' },
            { _id: 5, firstName: 'Duff', lastName: 'McKagan' }
        ];

        beforeEach(inject(function($componentController, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('/api/contacts').respond(contactData);

            ctrl = $componentController('contactList');
        }));

        it('should create a `contacts` property with 5 contacts fetched with `$http`', function() {
            jasmine.addCustomEqualityTester(angular.equals);

            expect(ctrl.contacts).toEqual([]);

            $httpBackend.flush();
            expect(ctrl.contacts).toEqual(contactData);
        });
    });
});
