const element = require('../../element/amazon.json')
const dataExample = require('../../../fixtures/example.json');

class HomePageAmazon {
    visit() {
        cy.viewport(1920, 1080);
        cy.visit(Cypress.env('BASE_URL_AMAZON'));
        cy.get('button').contains('Continue shopping').click();
    }
    searchProduct() {
        cy.wait(5000);
        cy.xpath(element.searchInput).type(dataExample.productsearch + '{enter}');
        cy.wait(2000);

    }

}

export default new HomePageAmazon();