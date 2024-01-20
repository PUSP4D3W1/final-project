const registerPage = require('../support/pages/registerPage');
const userData = require('../support/data/userData')

describe('Register', () => {
    it('user should be able to register', () => {
        registerPage.visit();
        registerPage.clickDaftarButton();
        registerPage.fillNamaToko(userData.validNamaToko);
        registerPage.fillEmail(userData.validEmail);
        registerPage.fillPassword(userData.validPassword);
        registerPage.clickRegisButton();
    })
})