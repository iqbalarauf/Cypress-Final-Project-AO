const HomePageAgoda = require('../support/page-object/Agoda/homepage')
const FlightList = require('../support/page-object/Agoda/flightlist');
const DataPassenger = require('../support/page-object/Agoda/datapassenger');

const HomePageAmazon = require('../support/page-object/Amazon/homepage');
const ListProduct = require('../support/page-object/Amazon/listproduct');

const HomePage = require('../support/page-object/youtube/homepage');
const Trending = require('../support/page-object/youtube/trending');

cy.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe('E2E', function () {
    it('Memesan Tiket Penerbangan di Agoda', function () {
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        })

        HomePageAgoda.visit()
        HomePageAgoda.selectFlightTab()
        FlightList.sortByDepartureTime()
        DataPassenger.fillPassengerDetails()
        cy.screenshot('Agoda Flight Booking');
    })
    it('Mencari Produk Kursi di Amazon', function () {
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        })
        
        HomePageAmazon.visit();
        HomePageAmazon.searchProduct();
        ListProduct.sortByPrice();
        cy.wait(2000);
        ListProduct.detailProduct();
        cy.screenshot('Amazon Chair Product Search');
    })
    it('Pencarian Video Trending Gaming di Youtube', function () {
        HomePage.visit();
        cy.wait(2000);
        HomePage.sidebarPage();
        cy.wait(2000);
        Trending.trendingGameSort3();
        cy.screenshot('Youtube Trending Gaming Videos');
    })
})