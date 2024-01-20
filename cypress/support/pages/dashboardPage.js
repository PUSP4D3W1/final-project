const locator = require('../locators/locatorAll');

class dashboardPage {
    async verifyDashboardPage () {
        cy.xpath(locator.datatestid.title_dashboard).should('be.visible');
    }

    async verifiyDashboardKategori () {
        cy.xpath(locator.datatestid.title_dash_kategori).should('be.visible');
    }
}

module.exports = new dashboardPage();