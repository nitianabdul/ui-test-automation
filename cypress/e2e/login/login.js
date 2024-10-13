import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the login page', () => {
  cy.visit('https://www.youtube.com/');
});
