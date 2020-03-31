describe('deleting a restaurant', () => {
  it('removes a restaurant from the list on the press of a button', () => {
    before(() => {
    });

    cy.visit('http://localhost:1234');

    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.get('[data-test="newRestaurantName"]')
      .type('anything');

    cy.get('[data-test="saveNewRestaurantButton"]')
      .click();

    cy.get('[data-test="restaurantNameListItem"]').should('have.length', 1);

    cy.get('[data-test="removeRestaurantButton"]:first').click();

    cy.get('[data-test="restaurantNameListItem"]').should('not.exist');
  });
});
