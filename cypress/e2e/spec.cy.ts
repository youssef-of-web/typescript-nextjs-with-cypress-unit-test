describe("Global Test", () => {
  //test filter
   it("Test filter", ()=>{
    cy.visit('http://localhost:3000')
    cy.get('#filter').click()
    cy.get('.default-checkbox').eq(1).click()
    cy.get('#start-filter').click()
    cy.get('#total-films').should("have.html", '1')
   })
   //test search
   it("Test Search", ()=>{
    cy.visit('http://localhost:3000')
    cy.get('#search_input').type("a")
    cy.get('#total-films').should("have.html", '2')
   })
   //test card
   it("Test Card", ()=>{
    cy.visit('http://localhost:3000')
    cy.get('.card').eq(0).then(($el)=>{
      cy.wrap($el).find('.image-film').should('have.length', '1')
      cy.wrap($el).find('.title').should('have.html', 'Oceans 8')
      cy.wrap($el).find('.category').should('have.html', 'Comedy')
      cy.wrap($el).find('.likes_bloc').should('have.length', '1')
      cy.wrap($el).find('.trash_card').should('have.length', '1')
    })
  })
})

