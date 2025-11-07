describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("src/index.html");
  });

  it("verifica o título da aplicação", () => {
    cy.title().should("eq", "Central de Atendimento ao Cliente TAT");
  });

  it("preenche os campos obrigatórios e envia o formulário", () => {
    let name = "Murilo";
    let lastName = "Fronza";
    let email = "email@example.com";
    let comment = "Teste automatizado com Cypress";
    cy.get("#firstName").as("name").type(name);
    cy.get("#lastName").type(lastName);
    cy.get("#email").type(email);

    cy.get("#open-text-area").as("commentSection").type(comment);

    cy.get("@name").should("have.value", name);
    cy.get("#lastName").should("have.value", lastName);
    cy.get("#email").should("have.value", email);
    cy.get("@commentSection").should("have.value", comment);

    cy.get(".button").as("sendButton");
    cy.get("@sendButton").click();
    cy.get(".success").should("be.visible");
  });

  it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", () => {
    let name = "Murilo";
    let lastName = "Fronza";
    let email = "emailinvalido@example,com";
    let comment = "Teste automatizado com Cypress";

    cy.get("#firstName").as("name").type(name);
    cy.get("#lastName").type(lastName);
    cy.get("#email").type(email);

    cy.get("#open-text-area").as("commentSection").type(comment);

    cy.get("@name").should("have.value", name);
    cy.get("#lastName").should("have.value", lastName);
    cy.get("#email").should("have.value", email);
    cy.get("@commentSection").should("have.value", comment);

    cy.get(".button").as("sendButton");
    cy.get("@sendButton").click();
    cy.get(".error").should("be.visible");
  });
});
