import { RESTAURANT_NAME, RESTAURANT_NAME_ALT, DISH_NAME, DISH_NAME_ALT } from '../../../constants/messages';

describe('adding a dish', () => {
  it('displays a dish in the list', () => {
    const userFullName = 'John Doe';

    stubApiAndVisit(userFullName);
    addRestaurant(RESTAURANT_NAME);
    goToRestaurantPage(RESTAURANT_NAME);
    modalNotShown();
    usersVisitdAreShown(userFullName);
    addDish(DISH_NAME);
    addDish(DISH_NAME_ALT);
    dishesRetainedWhenLeavingPage(RESTAURANT_NAME, DISH_NAME);
    dishesStoredPerRestaurant(RESTAURANT_NAME_ALT, DISH_NAME);
  });

  function stubApiAndVisit(userFullName) {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/users',
      response: [
        {
          id: 1,
          name: userFullName,
        },
      ],
    });

    cy.visit('http://localhost:1234');
  }

  function addRestaurant(restaurantName) {
    // no need for validation because that already takes place in adding_a_restaurant.spec.js
    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.get('[data-test="newRestaurantName"]')
      .focus()
      .type(restaurantName);

    cy.get('[data-test="saveNewRestaurantButton"]')
      .click();
  }

  function goToRestaurantPage(restaurantName) {
    // contains also returns the element
    cy.contains(RESTAURANT_NAME).click();
  }

  function modalNotShown() {
    cy.get('input[data-test="newDishName"]')
      .should('not.be.visible');
  }

  function usersVisitdAreShown(name) {
    cy.contains(name);
  }

  function addDish(dishName) {
    cy.get('[data-test="addNewDishButton"]')
      .click();

    cy.get('[data-test="newDishName"]')
      .focus()
      .type(dishName);

    cy.get('[data-test="saveNewDishButton"]')
      .click();

    modalNotShown();

    cy.contains(dishName);
  }

  function dishesRetainedWhenLeavingPage(restaurantName, dishName) {
    cy.get('[data-test="dishesList"]')
      .find('[data-test="dishNameListItem"]')
      .should('have.length', 2);

    cy.get('[data-test="backButton"]')
      .click();

    goToRestaurantPage(restaurantName);

    cy.get('[data-test="dishesList"]')
      .find('[data-test="dishNameListItem"]')
      .should('have.length', 2);

    cy.contains(dishName);

    cy.get('[data-test="backButton"]')
      .click();
  }

  function dishesStoredPerRestaurant(restaurantName, dishName) {
    addRestaurant(restaurantName);
    goToRestaurantPage(restaurantName);

    cy.contains(dishName)
      .should('not.exist');
  }
});
