describe('adding a restaurant', () => {
  const restaurantName = 'Sushi Place';
  it('displays the reastaurant in thet list', () => {

    cy.visit('http://localhost:1234');

    modalNotShown();

    canCloseModal();

    listsValidRestaurantName();
  });

  function modalNotShown() {
    // confirm newRestaurantName field not shown
    cy.get('[data-test="newRestaurantName"]').should('not.be.visible');

  }

  function canCloseModal() {
    // open and close modal without adding a new restaurant
    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.get('[data-test="addRestaurantModal"] button.modal-close')
      .click();

    cy.get('[data-test="newRestaurantName"]').should('not.be.visible');

    displaysErrorOnBlankInput();
  }

  function displaysErrorOnBlankInput() {
    // modal displays validation errors
    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.get('[data-test="saveNewRestaurantButton"]')
      .click();

    cy.get('[data-test="newRestaurantNameError"]')
      .contains('Cannot be blank');

    cy.get('[data-test="newRestaurantNameError"]')
      .should('have.css', 'color', 'rgb(255, 0, 0)');
  }

  function listsValidRestaurantName() {
    /**
     * Type restaurant name force true so it does not throw an error because label is shown
     */
    cy.get('[data-test="newRestaurantName"]')
      .type(restaurantName, { force: true });

    // make sure validation error is not shown after user has input text
    cy.get('[data-test="newRestaurantNameError"]')
      .should('not.be.visible');

    cy.get('[data-test="saveNewRestaurantButton"]')
      .click();

    // confirm newRestaurantName field not shown
    cy.get('[data-test="newRestaurantName"]').should('not.be.visible');

    cy.contains(restaurantName);
  }
});
