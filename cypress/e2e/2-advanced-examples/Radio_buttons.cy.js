///<reference types="cypress"/>

describe("verify by adding a specific vegetable to the cart and place the order", () => {
  it("Add the vegetable to the cart and place order", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("input[name='radioButton']")
      .check("radio1")
      .should("be.checked")
      .and("have.value", "radio1");
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    cy.get("#dropdown-class-example")
      .select("option1")
      .should("have.value", "option1");
    cy.get("#autocomplete").type("United");
    cy.get(".ui-menu-item-wrapper").each((i, index, $list) => {
      cy.log(i.text());
      if (i.text().includes("United Arab Emirates")) {
        cy.wrap(i).click();
      }
    });
    //cy.get('#opentab').invoke('removeAttr','target').click()
    cy.get("#opentab").invoke("removeAttr", "target").click({ force: true });
    cy.go("back");
    cy.reload();
  });

  it.only("Add the vegetable to the cart and place order", () => {
    cy.visit("https://www.google.com/");

    cy.get("[title='Search']").type("aed to inr");
    //cy.contains("Gmail").click();
    // cy.origin("https://accounts.google.com", () => {
    //   cy.get('[type="email"]').type("vgb369@gmail.com");
    //   cy.get('[type="button"]').click();
    //   cy.get('[type="password"]').type("password");
    //   cy.get('[type="button"]').click();
    // });
  });
});
