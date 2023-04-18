// describe("verify iframes", () => {

//     it("verify by navigating to iframe and perform the actions on page", () => {

//         cy.visit("http://www.webdriveruniversity.com/")

//         cy.get("#iframe")
//             .scrollIntoView()
//             .invoke('removeAttr', 'target')
//             .click();

//         cy.get("#frame")
//             .its('0.contentDocument.body')
//             .then(cy.wrap)
//             .as("framePage")

//         cy.get("@framePage")
//             .find('#button-find-out-more>b').should('have.text', 'Find Out More!')

//         cy.get("@framePage")
//             .contains('a', 'Our Products')
//             .click()
//     })

// })
