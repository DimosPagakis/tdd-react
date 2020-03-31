describe('adding a restaurant', () => {
  it('displays the reastaurant in thet list', () => {
    const restaurantName = 'Sushi Place';

    cy.visit('http://localhost:1234');

    // confirm newRestaurantName field not shown
    cy.get('[data-test="newRestaurantName"]').should('not.be.visible');

    cy.get('[data-test="addRestaurantButton"]')
      .click();

    // force true so it does not throw an error because label is shown
    cy.get('[data-test="newRestaurantName"]')
      .type(restaurantName, { force: true });

    cy.get('[data-test="saveNewRestaurantButton"]')
      .click();

    // confirm newRestaurantName field not shown
    cy.get('[data-test="newRestaurantName"]').should('not.be.visible');

    cy.contains(restaurantName);
  });
});
