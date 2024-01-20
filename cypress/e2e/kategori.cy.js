const loginPage = require('../support/pages/loginPage');
const userData = require('../support/data/userData')
const dashboardPage = require('../support/pages/dashboardPage');
const kategoriPage = require('../support/pages/kategoriPage');


describe('Kategori', () => {
    beforeEach (() => {
        loginPage.visit();
        loginPage.fillEmail(userData.validEmail);
        loginPage.fillPassword(userData.validPassword);
        loginPage.clickLoginbutton();
        dashboardPage.verifyDashboardPage();
    })

    it('user should be able add category', () => {
        kategoriPage.clickKategoributton();
        kategoriPage.clickAdd();
        kategoriPage.fillNamaKategori(userData.validNamaKategori);
        kategoriPage.fillDescKategori(userData.validDescKategori);
        kategoriPage.clickSimpan();
        kategoriPage.validationSuccess();
    })

    it('user should be able edit category', () => {
        kategoriPage.clickKategoributton();
        kategoriPage.clickTripledot();
        kategoriPage.clickUbah();
        kategoriPage.fillNamaKategori(userData.validNamaKategori);
        kategoriPage.fillDescKategori(userData.validDescKategori);
        kategoriPage.clickSimpan();
        kategoriPage.validationSuccessEdit();
    })

    it('user should be able delete category', () => {
        kategoriPage.clickKategoributton();
        kategoriPage.clickTripledot();
        kategoriPage.clickHapus();
        kategoriPage.clickHapusbtn();
        kategoriPage.validationSuccessHapus();
    })

    afterEach (() => {
        dashboardPage.verifiyDashboardKategori();
    })
})