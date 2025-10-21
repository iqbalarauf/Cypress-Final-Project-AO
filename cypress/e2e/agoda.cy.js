const HomePageAgoda = require('../support/page-object/agoda/homePage')
const FlightList = require('../support/page-object/agoda/flightList');
const DataPassenger = require('../support/page-object/agoda/dataPassenger');

describe('E2E', function () {
    it('Memesan Tiket Penerbangan', function () {
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        })

        HomePageAgoda.visit()
        HomePageAgoda.selectFlightTab()
        FlightList.sortByDepartureTime()
        DataPassenger.fillPassengerDetails()
    })
})