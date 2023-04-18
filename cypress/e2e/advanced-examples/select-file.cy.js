// describe("verify by selecting a file from project directory", () => {

//     it("select the png file from project repository", () => {


//         cy.fixture('test_approach.jpeg', { encoding: null }).as('myFixture')

//         cy.visit("http://www.webdriveruniversity.com/")

//         cy.get("#file-upload")
//             .scrollIntoView()
//             .invoke('removeAttr', 'target')
//             .click();

//         cy.get("input#myFile")
//             .selectFile('@myFixture')

//         cy.get("#submit-button")
//             .click()

//         cy.on('window:alert', (text) => {
//             expect(text).to.include('Your file has now been uploaded!')
//         })


//     })
// })
