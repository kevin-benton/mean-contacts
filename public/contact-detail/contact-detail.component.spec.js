'use strict';

describe('contactDetail', function() {
    beforeEach(module('contactDetail'));

    // Test the controller
    describe('ContactDetailController', function() {
        var $httpBackend, ctrl;
        var axlContactData = {
            firstName: 'Axl',
            lastName: 'Rose'
        };

        beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('/api/contacts/1234').respond(axlContactData);

            $routeParams.contactId = '1234';

            ctrl = $componentController('contactDetail');
        }));

        it('should fetch the contact details', function() {
            jasmine.addCustomEqualityTester(angular.equals);

            expect(ctrl.contact).toEqual({});

            $httpBackend.flush();
            expect(ctrl.contact).toEqual(axlContactData);
        });
    });
});
