const locator = require('../locators/locatorAll');

class kategoriPage {
    async clickKategoributton() {
        cy.xpath('//*[@id=\"root\"]/div/div/div[1]/div/a[5]/div/div/div').click()
        //cy.xpath('//*[contains(@class, "css-1mqa38q")][text()[contains(.,"kategori")]]').click()
    }
    async clickAdd() {
        cy.xpath('//*[@id=\"root\"]/div/div/div[2]/div[2]/div[2]/a').click()
    }

    async clickTripledot() {
        cy.xpath('//*[@id=\"menu-button-19\"]').click()
        //cy.xpath('//*[contains(@class, "chakra-button chakra-menu__menu-button css-pu8osu"]').click()
        
    }

    async clickUbah() {
        cy.xpath('//*[@id=\"menu-list-19-menuitem-16"]').click()
    }

    async clickHapus() {
        //cy.xpath('//*[contains(@class, "chakra-menu__menuitem css-13c7rae"]').click()
        // cy.xpath('//*[contains(@class, "chakra-button chakra-menu__menu-button css-pu8osu"][text()[contains(.,"hapus")]]').click()
        // cy.contains('.chakra-button chakra-menu__menu-button css-pu8osu', 'hapus')
        const DELETE_BUTTON_POSITION = 'absolute';
        cy.get('[class="chakra-menu__menuitem css-13c7rae"] button').each(($button, index) => {
            if ($button.text().includes('hapus')) { 
                let delete_button = index + DELETE_BUTTON_POSITION; 
                cy.get('button').eq(delete_button).click();
            }
        })

         
            // const DELETE_BUTTON_POSITION = 3;                 
            // cy.get('button').contains('hapus').should('be.visible').click();        
            // cy.get('[class="chakra-menu__menuitem css-13c7rae"]').within(()=>{
            // //there are 5-10 button in this class as soon as i upgraded to version 12 code started failing
            //     cy.get('button').each(($button, index) => {
            //         if ($button.text().includes('hapus')) { 
            //             let delete_button = index + DELETE_BUTTON_POSITION; 
            //             cy.get('button').eq(delete_button).click();
            //         }
            //     })
            // })
    
    }

    async clickHapusbtn() {
        cy.xpath('//*[contains(@class, "chakra-button css-n45e6f"]').click()
    }

    async fillNamaKategori(nama_kategori) {
        cy.xpath(locator.datatestid.nama_kategori).type(nama_kategori)
    }

    async fillDescKategori(desc_kategori) {
        cy.xpath(locator.datatestid.desc_kategori).type(desc_kategori)
    }

    async clickSimpan() {
        cy.xpath('//*[contains(@class, "chakra-button css-l5lnz6")]').click()
    }

    async validationSuccess() {
        cy.xpath('//*[@id=\"toast-1-title\"]').should('be.visible');
    }

    async validationSuccessEdit() {
        cy.xpath('//*[contains(@class, "chakra-alert__title css-tidvy5")]').should('be.visible');
    }

    async validationSuccessHapus() {
        cy.xpath('//*[contains(@class, "chakra-toast-portal div.chakra-alert__title")]').should('be.visible');
    }
}

module.exports = new kategoriPage();
