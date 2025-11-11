// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add(
  "fillAllMandatoryFieldsAndSubmit",
  (name, lastName, email, comment) => {
    // digita campos
    cy.get("#firstName").as("name").type(name);
    cy.get("#lastName").type(lastName);
    cy.get("#email").type(email);
    cy.get("#open-text-area").as("commentSection").type(comment);
    // valida campos
    cy.get("@name").should("have.value", name);
    cy.get("#lastName").should("have.value", lastName);
    cy.get("#email").should("have.value", email);
    cy.get("@commentSection").should("have.value", comment);
    // envia formulario
    cy.get(".button").as("sendButton");
    cy.get("@sendButton").click();
    cy.get(".success").should("be.visible");
  }
);
