describe("Validar página privacy.html", () => {
  beforeEach(() => {
    cy.visit("src/index.html");
  });

  it("verifica que a política de privacidade abre em outra aba sem a necessidade de um clique", () => {
    cy.get("a[href='privacy.html']")
      .as("link")
      .should("have.attr", "target", "_blank");
    cy.get("@link").invoke("removeAttr", "target").click();
    cy.title().should(
      "eq",
      "Central de Atendimento ao Cliente TAT - Política de Privacidade"
    );
  });
});
