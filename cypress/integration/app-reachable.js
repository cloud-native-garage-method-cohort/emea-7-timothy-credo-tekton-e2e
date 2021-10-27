/// <reference types="cypress" />

describe('app reachable', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays a page body', () => {
    cy.get('body').should('have.length', 1)
  })
})
