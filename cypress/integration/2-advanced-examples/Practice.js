
///<reference types="cypress"/>

describe("verify by validating all the basic validations",() =>{

    it("verify details",() =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.url().should('eq','https://rahulshettyacademy.com/AutomationPractice/')
        cy.title().should('eq','Practice Page')
        cy.get('#name').clear()
        cy.get('#name').type('gopi').then(() =>{
            cy.get('#confirmbtn').click()
            cy.on('window:alert',(text) =>{
             //expect(text).to.include('Hello gopi, Are you sure you want to confirm?')
             //we cannot use this for confirm button alert box when we use window: alert, 
             //if we use window: confirm we can use expect text
             return true
         })
        })
       


       cy.get('#name').type('hello Gopi!').then(() =>{
        cy.get('#alertbtn').click()
       cy.on('window:alert',(str) =>{
           expect(str).to.include('Hello hello Gopi!, share this practice page and share your knowledge')
           //includes('Hello hello Gopi!, share this practice page and share your knowledge')
           //contains('Hello hello Gopi!, share this practice page and share your knowledge')
           //equal('Hello hello Gopi!, share this practice page and share your knowledge')
           //eq('Hello hello Gopi!, share this practice page and share your knowledge')
       })
       })
       
      
    })

})
