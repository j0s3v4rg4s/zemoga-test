/// <reference types="cypress" />
describe('home page', () => {
  beforeEach(() => {
    cy.visit('https://cocky-banach-812856.netlify.app/');
  });

  it('should click on like button and check white border', () => {
    cy.get('#0-like')
      .click()
      .should('have.class', 'card__vote-btn')
      .and('have.class', 'like')
      .and('have.class', 'select');
  });

  it('should click on dislike button and check white border', ()=> {
    cy.get('#0-dislike')
      .click()
      .should('have.class', 'card__vote-btn')
      .and('have.class', 'dislike')
      .and('have.class', 'select');
  })

  it("should vote button be disable", () => {
    cy.get('app-card').first().find('.card__vote-now.dismiss')
  })

  it('should vote button be enable when select like button', () => {
    cy.get('#0-like').click().get('app-card').first().find('.card__vote-now')
  })

  it('should vote button be enable when select dislike button', () => {
    cy.get('#0-dislike').click().get('app-card').first().find('.card__vote-now')
  })

});
