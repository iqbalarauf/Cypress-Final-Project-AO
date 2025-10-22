const HomePageAgoda = require('../support/page-object/Agoda/homepage')
const FlightList = require('../support/page-object/Agoda/flightlist');
const DataPassenger = require('../support/page-object/Agoda/datapassenger');

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