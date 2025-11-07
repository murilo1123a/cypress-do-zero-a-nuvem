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

  it("seleciona um produto (YouTube) por seu texto", () => {
    let value = "youtube";
    cy.get("select").select(value);
    cy.get("select").should("have.value", value);
  });

  it("marca cada tipo de atendimento", () => {
    cy.get("#email-checkbox").as("email").check();
    cy.get("@email").should("be.checked");

    cy.get("#phone-checkbox").as("phone").check();
    cy.get("@phone").should("be.checked");
  });

  it("marca ambos checkboxes, depois desmarca o último", () => {
    // marca ambos
    cy.get("#check input").as("r").check();
    // verifica ambos
    cy.get("@r").first().should("be.checked");
    cy.get("@r").last().should("be.checked");
    // desmarca o ultimo e o verifica
    cy.get("@r").last().uncheck();
    cy.get("@r").last().should("not.be.checked");
  });

  it("seleciona um arquivo da pasta fixtures", () => {
    cy.get("input[type='file']").as("fileInput").should("not.have.value");
    cy.get("@fileInput").selectFile("cypress/fixtures/example.json");
    cy.get("@fileInput").should((input) => {
      expect(input[0].files[0].name).to.equal("example.json");
    });
  });
});
