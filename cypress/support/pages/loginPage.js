const locator = require('../locators/locatorAll');

class loginPage {

    async visit() {
        cy.visit('https://kasirdemo.belajarqa.com/', {timeout:6000})

    }

    async fillEmail(email) {
        cy.xpath(locator.datatestid.email_field).type(email)
    }

    async fillPassword(password) {
        cy.xpath(locator.datatestid.pass_field).type(password)
    }

    async clickLoginbutton() {
        cy.xpath('//*[contains(@class, "chakra-button css-1n8i4of")]').click()
    }
}

module.exports = new loginPage();