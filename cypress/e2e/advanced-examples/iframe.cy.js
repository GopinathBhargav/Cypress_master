describe("verify iframes", () => {

    it("verify by navigating to iframe and verify the text of the button", () => {

        cy.visit("http://www.webdriveruniversity.com/")

        cy.get("#iframe")
            .scrollIntoView()
            .invoke('removeAttr', 'target')
            .click();

        cy.get("#frame")
            .its('0.contentDocument.body')
            .then(cy.wrap)
            .find('#button-find-out-more>b').should('have.text', 'Find Out More!')
    })

})