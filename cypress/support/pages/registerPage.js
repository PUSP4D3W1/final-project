const locator = require('../locators/locatorAll');

class registerPage {

    async visit() {
        cy.visit('https://kasirdemo.belajarqa.com/', {timeout:6000})
    }

    async clickDaftarButton() {
        cy.xpath('//*[@id=\"root\"]/div/div/div/div[2]/div/div[3]/a').click()
    }

    async fillNamaToko(namatoko) {
        cy.xpath(locator.datatestid.namatoko_field).type(namatoko)
    }

    async fillEmail(email) {
        cy.xpath(locator.datatestid.email_field).type(email)
    }

    async fillPassword(password) {
        cy.xpath(locator.datatestid.pass_field).type(password)
    }

    async clickRegisButton() {
        cy.xpath('//*[contains(@class, "chakra-button css-1n8i4of")]').click()
    }
}

module.exports = new registerPage();