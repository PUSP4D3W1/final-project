const loginPage = require('../support/pages/loginPage');
const userData = require('../support/data/userData')
const dashboardPage = require('../support/pages/dashboardPage')


describe('Login', () => {
    it('user should be able to login with valid credential', () => {
        loginPage.visit();
        loginPage.fillEmail(userData.validEmail);
        loginPage.fillPassword(userData.validPassword);
        loginPage.clickLoginbutton();
        dashboardPage.verifyDashboardPage();
    })
})