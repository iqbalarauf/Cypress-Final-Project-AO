const element = require('../../element/agoda.json');

class DataPassanger {
    fillPassengerDetails() {
        // Fill in passenger details
        cy.xpath(element.contactFirstName).type('John');
        cy.wait(1000);
        cy.xpath(element.contactLastName).type('Doe');
        cy.wait(1000);
        cy.xpath(element.contactEmail).type('johndoe12@mail.com');
        cy.wait(1000);
        cy.xpath(element.contactPhoneNumber).type('8123456789');
        cy.wait(1000);
        cy.xpath(element.passenggerGender).first().check().click()
        cy.xpath(element.passengerFirstName)
            .type('John')
            .within(() => {
                cy.xpath(`//input[@id='contact.contactFirstName']`)
                    .invoke('val').then((firstName) => {
                        cy.wrap(firstName.trim()).as('passengerFirstName');
                    })
            })
        cy.wait(1000);
        cy.xpath(element.passengerLastName)
            .type('Doe')
            .within(() => {
                cy.xpath(`//input[@id='contact.contactLastName']`)
                    .invoke('val').then((lastName) => {
                        cy.wrap(lastName.trim()).as('passengerLastName');
                    })
            })
        cy.wait(1000);
        cy.xpath(element.passengerBirthDate).type('10');
        cy.wait(1000);
        cy.xpath(element.passengerBirthMonth).eq(2).click();
        cy.wait(1000);
        cy.xpath(element.passengerBirthMonthSelect).eq(1).click();
        cy.wait(1000);
        cy.xpath(element.passengerBirthYear).type('2001');
        cy.wait(1000);
        cy.xpath(element.passengerBirthMonth).eq(3).click();
        cy.wait(1000);
        cy.xpath(element.selectNationality).type('Indo');
        cy.wait(1000);
        cy.xpath(element.passengerBirthMonthSelect).contains('Indonesia').click()
        cy.wait(1000);
        cy.wait(2000);
        cy.xpath(element.protectionYesButton).click();
        cy.wait(2000);
        cy.xpath(`//div[@data-component="mob-flight-price-breakdown-wrapper"]`)
            .within(() => {
                cy.xpath(`//dd[@data-component='mob-flight-price-total-desc']//span`)
                    .invoke('text')
                    .then((totalPrice) => {
                        cy.wrap(totalPrice.trim()).as('totalPrice');
                    });
            })
        cy.xpath(element.paymentButton).click();
        cy.wait(2000);
        cy.xpath(element.declineInsuranceButton).click();
        cy.wait(5000);
        cy.wait(2000);
        cy.get('@passengerFirstName').then((firstName) => {
            cy.get('@passengerLastName').then((lastName) => {
                const fullName = `${firstName}` + ` ` + `${lastName}`;
                // Misalnya kita ingin pastikan nama ini tampil dalam elemen tertentu:
                cy.xpath(`//div[@data-component="passenger-summary-list"]//span[@data-component='name-container-name']`, { timeout: 15000 })
                    .invoke('text')
                    .should('equal', fullName);
            });
        });
        cy.get('@totalPrice').then((totalPrice) => {
            cy.wait(2000);
            cy.xpath(`//dd[@data-component="mob-flight-price-total-desc"]//span`)
                .invoke('text')
                .should('include', totalPrice);
        })
    }
}

export default new DataPassanger();