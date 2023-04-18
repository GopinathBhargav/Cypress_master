// ///<reference types="cypress"/>

// describe("verify by validating the products using aliases and invoke", () => {

//     beforeEach(()=>{
//         cy.visit(Cypress.env("test_url"));
//     })


//     it("verify all the products and match with the expected value using aliase", () => {
//         cy.get(".thumbnail").as('productList')
//         cy.get('@productList').should('have.length', 16);
//     })

//     it("verify all the products cart containing title as add to cart", () => {
//         cy.get(".thumbnail").as('productList')
//         cy.get('@productList').find(".productcart").invoke('attr', 'title').should('include', 'Add to Cart')

//     })

//     it("verify all the products in alist and click a specific product", () => {
//         cy.get(".fixed_wrapper").find(".prdocutname").each((i, index, $list) => {
//             if (i.text().includes('Benefit Bella Bamba')) {
//                 cy.wrap(i).click();
//             }
//         })
//     })

//     it("verify by adding prices of each individual products", () => {
//         // cy.get(".thumbnail").find(".oneprice").each((i, index, $list) => {
//         //    cy.log(i.text())}
//         let totalPrice = 0;
//         let nonDiscountedPrice = 0;
//         let discountedPrice = 0;
//         cy.get(".thumbnail").find(".oneprice").invoke('text').as('itemsPrice')
//         cy.get('@itemsPrice').then(priceValue => {
//             let price = priceValue.split('$');
//             for (let i = 0; i < price.length; i++) {
//                 cy.log(price[i])
//                 nonDiscountedPrice = nonDiscountedPrice + Number(price[i])
//             }
//             cy.log("total non discounted sum is " + nonDiscountedPrice)
//             totalPrice = totalPrice + nonDiscountedPrice
//             cy.log("total non discounted price is " + totalPrice)
//         })

//         cy.get(".thumbnail").find(".pricenew").invoke('text').as('discountPrice')
//         cy.get('@discountPrice').then(priceDiscounted => {
//             let discountPriceText = priceDiscounted.split('$');
//             for (let i = 0; i < discountPriceText.length; i++) {
//                 cy.log(discountPriceText[i])
//                 discountedPrice = discountedPrice + Number(discountPriceText[i])
//             }
//             cy.log("total discounted sum is " + discountedPrice)
//             totalPrice = totalPrice + discountedPrice
//             cy.log("total discounted price is " + totalPrice)
//         }).then(() => { // this will execute only after discounted price calculation
//             expect(totalPrice).to.eq(648.5)
//         })

//     })

// })
