const element = require('../../element/agoda.json');

class FlightList {
    sortByDepartureTime() {
        // Click on the sort options
        cy.xpath(element.sortByButton).click();
        cy.wait(2000);
        cy.xpath(element.sortByOptions)
            .filter((index, el) => {
                const text = Cypress.$(el).text();
                return text.includes('Departure time') || text.includes('Waktu keberangkatan');
            })
            .first()
            .click();
        cy.wait(2000);
        cy.get('body').then(($body) => {
            let dataFlight = `//div[@data-testid='flightCard-flight-detail']`
            if ($body.text().includes('Malaysia Airlines')) {
                // Malaysia Airlines ditemukan
                cy.xpath(dataFlight).contains('Malaysia Airlines').first().click();
                cy.wait(2000);
                cy.xpath(dataFlight)
                    .contains('Malaysia Airlines')
                    .first()
                    .within(() => {
                        cy.xpath(`//div[@data-testid='departure-time']//p`)
                            .first()
                            .invoke('text')
                            .then((departureTime) => {
                                cy.wrap(departureTime.trim()).as('departureTime');
                            });
                        cy.xpath(`//div[@data-testid='departure-time']//p`)
                            .last()
                            .invoke('text')
                            .then((arrivalTime) => {
                                cy.wrap(arrivalTime.trim()).as('arrivalTime');
                            });
                    })
            } else {
                // Semua maskapai tidak tersedia
                cy.log('Tidak ada maskapai yang tersedia dari daftar.');
            }

        })
        cy.xpath(element.selectAirline).click();
    }
}

export default new FlightList();