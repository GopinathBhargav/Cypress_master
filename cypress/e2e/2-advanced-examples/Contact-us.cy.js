///<reference types="cypress"/>

describe("verify by filling the form with valid and invalid cases",() =>{

    it("verify by passing valid details using css selector",() =>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.document().its('charset').should('contain','UTF-8')
        //cy.document().should('have.property','charset').and('eq','UTF-8')
        //cy.title().should('contain','WebDriver | Contact Us');
        cy.title().should('include','WebDriver | Contact Us');
        cy.url().should('contain','Contact-Us');
        cy.get("[name='first_name']").type("Gopinath");
        cy.get("[name='last_name']").type("Bhargav");
        cy.get("[name='email']").type("vgb123@gmail.com");
        cy.get("[name='message']").type("This is cypress test automation using mocha steps");
        cy.get("[type='submit']").click();
    })

    // for xpath in cypress we need to install cypress xpath from npm then we need to add commonad in index.js
    // when we provide xpath we need to use type cy.xpath instead of cy.get
        it("verify by passing valid details using xpath selector",() =>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.xpath("//input[@name='first_name']").type("GopinathBhargav");
        cy.xpath("//input[@name='last_name']").type("V");
        cy.xpath("//input[@name='email']").type("vgb123@gmail.com");
        cy.xpath("//textarea[@name='message']").type("This is cypress test automation using mocha steps");
        cy.xpath("//input[@type='submit']").click();
        cy.xpath("//div[@id='contact_reply']/h1").should('have.text','Thank You for your Message!');
    })

    it("verify by passing blank last name",() =>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get("[name='first_name']").type("Gopinath");
        cy.get("[name='email']").type("vgb123@gmail.com");
        cy.get("[name='message']").type("This is cypress test automation using mocha steps");
        cy.get("[type='submit']").click();
        cy.contains('body','Error: all fields are required')
        //cy.get("body").contains("Error: all fields are required")
    })

    it("verify by passing blank first name and last name",() =>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get("[name='email']").type("vgb123@gmail.com");
        cy.get("[name='message']").type("This is cypress test automation using mocha steps");
        cy.get("[type='submit']").click();
    })
})