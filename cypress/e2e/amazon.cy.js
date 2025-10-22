const HomePageAmazon = require('../support/page-object/Amazon/homepage');
const ListProduct = require('../support/page-object/Amazon/listproduct');

describe('E2E', function () {
    it('Mencari Produk', function () {
         cy.on('uncaught:exception', (err, runnable) => {
            return false;
        })
        
        HomePageAmazon.visit();
        HomePageAmazon.searchProduct();
        ListProduct.sortByPrice();
        cy.wait(2000);
        ListProduct.detailProduct();
    })
})