///<reference types="cypress"/>

describe("verify by filling the form with valid and invalid cases",() =>{

    before(()=>{
        cy.fixture('test-data.json').then((testdata)=>{
           globalThis.testdata = testdata
        })
    })

    beforeEach(()=>{
        cy.visit("/")  
    })

    it.only("verify by passing valid details using css selector by driving data through fixture",() =>{ 
        cy.document().its('charset').should('contain','UTF-8')
        //cy.document().should('have.property','charset').and('eq','UTF-8')
        //cy.title().should('contain','WebDriver | Contact Us');
        cy.title().should('include','WebDriver | Contact Us');
        cy.url().should('contain','Contact-Us');
        cy.get("[name='first_name']").type(testdata.first_name);
        cy.get("[name='last_name']").type(testdata.last_name);
        cy.get("[name='email']").type(testdata.email);
        cy.get("[name='message']").type(testdata.message);
        cy.get("[type='submit']").click();
    })

    // for xpath in cypress we need to install cypress xpath from npm then we need to add commonad in index.js
    // when we provide xpath we need to use type cy.xpath instead of cy.get
        it("verify by passing valid details using xpath selector",() =>{
        cy.xpath("//input[@name='first_name']").type(testdata.first_name);
        cy.xpath("//input[@name='last_name']").type(testdata.last_name);
        cy.xpath("//input[@name='email']").type(testdata.email);
        cy.xpath("//textarea[@name='message']").type(testdata.message);
        cy.xpath("//input[@type='submit']").click();
        cy.xpath("//div[@id='contact_reply']/h1").should('have.text','Thank You for your Message!');
    })

    it("verify by passing blank last name",() =>{
        cy.get("[name='first_name']").type(testdata.first_name);
        cy.get("[name='email']").type(testdata.email);
        cy.get("[name='message']").type(testdata.message);
        cy.get("[type='submit']").click();
        cy.contains('body','Error: all fields are required')
        //cy.get("body").contains("Error: all fields are required")
    })

    it("verify by passing blank first name and last name",() =>{
        cy.get("[name='email']").type(testdata.email);
        cy.get("[name='message']").type(testdata.message);
        cy.get("[type='submit']").click();
    })
})