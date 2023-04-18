// ///<reference types="cypress"/>

// describe("verify by adding a specific vegetable to the cart and place the order",() =>{


//     it.only("Add the vegetable to the cart and place order",() =>{
//         cy.visit(Cypress.env("cart_url"));
//         cy.title().should('include','GreenKart');
//         cy.url().should('contain','https://rahulshettyacademy.com/');
//         cy.get(".search-keyword").type("ca");
//         cy.get(".product:visible").should('have.length',4)
//         cy.get(".products").find('.product').as("itemsList")
//         cy.get("@itemsList").each((i,index,$list)=>{
//            if(i.text().includes('Capsicum')){
//             cy.wrap(i).contains("ADD TO CART").click()
//             }   
//         })
//         cy.get(".cart-icon").click()
//         cy.contains('PROCEED TO CHECKOUT').click()
//         cy.get('.product-name').should('have.text','Capsicum')
//         cy.contains('Place Order').click()
        
//     })
// })
