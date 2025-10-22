const element = require('../../element/youtube.json')

class HomePage {
    visit() {
        cy.visit(Cypress.env('BASE_URL_YOUTUBE'));
    }

    sidebarPage() {
        cy.xpath(element.guideButton).click();
        cy.xpath(element.moviesTab).contains('Game').click();
    }
}

export default new HomePage();