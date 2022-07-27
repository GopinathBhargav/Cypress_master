describe("verify by navigating to child window and perform mouse event actions", () => {

    it("verify drag and drop functionality with mouse events", () => {

        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#actions").scrollIntoView().invoke('removeAttr','target').click();
        cy.url().should('contain','http://www.webdriveruniversity.com/Actions/index.html')
        cy.get("#draggable").trigger('mousedown',{which:1})
        cy.get("#droppable").trigger('mousemove').trigger('mouseup',{force:true})
        cy.get("#droppable>p").then((element) =>{
            expect(element).to.have.css('background-color', 'rgb(244, 89, 80)')
        })
        //.should('have.attr','style','background-color: rgb(244, 89, 80); height: 100%;'
        cy.get("#double-click").dblclick()

    })

})