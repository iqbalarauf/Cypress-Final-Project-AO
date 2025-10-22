const element = require('../../element/amazon.json')

class ListProduct {
    sortByPrice() {

        cy.xpath(element.sortDropdown, { timeout: 5000 }).click();
        cy.wait(1000);
        cy.xpath(element.sortOption).contains('Price: High to Low').click();
        cy.wait(5000);
    }
    detailProduct() {
        cy.xpath(element.selectProduct5)
            .within(() => {
                cy.get('a h2 span').invoke('text').then((productName) => {
                    cy.wrap(productName.trim()).as('productName');
                });
                cy.get('span.a-price').invoke('text').then((priceText) => {
                    const priceWhole = priceText.trim().match(/\$\d+/)[0]; // hanya ambil $ dan digit puluhan
                    cy.wrap(priceWhole).as('productPrice');
                });
                cy.get('a h2').click();
                cy.wait(2000);
            })
        cy.location('pathname', { timeout: 10000 });

        cy.get('@productName').then((productName) => {
            cy.wait(1000);
            cy.get('h1 #productTitle').invoke('text').should('include', productName.trim()); // cukup awalan
        });

        // Validasi harga produk
        cy.get('@productPrice').then((productPrice) => {
            cy.wait(1000);
            cy.get('span.a-price > span.a-offscreen').first().invoke('text').should('include', productPrice);
        });
    }
}

export default new ListProduct();