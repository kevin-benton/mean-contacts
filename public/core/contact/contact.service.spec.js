'use strict';

describe('Contact', function() {
    var $httpBackend;
    var Contact;
    var contactsData = [
        { _id: 1, firstName: 'Axl', lastName: 'Rose' },
        { _id: 2, firstName: 'Slash', lastName: '' },
        { _id: 3, firstName: 'Steven', lastName: 'Adler' },
        { _id: 4, firstName: 'Izzy', lastName: 'Stradlin' },
        { _id: 5, firstName: 'Duff', lastName: 'McKagan' }
    ];

    // Add a custom equality tester before each test
    beforeEach(function() {
        jasmine.addCustomEqualityTester(angular.equals);
    });

    // Load the module that contains the `Contact` service before each test
    beforeEach(module('core.contact'));

    // Instantiate the service and "train" `$httpBackend` before each test
    beforeEach(inject(function(_$httpBackend_, _Contact_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('/api/contacts').respond(contactsData);

        Contact = _Contact_;
    }));

    // Verify that there are no outstanding expectations or requests after each test
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should fetch the contacts data from `/api/contacts`', function() {
        var contacts = Contact.query();

        expect(contacts).toEqual([]);

        $httpBackend.flush();
        expect(contacts).toEqual(contactsData);
    });
});
