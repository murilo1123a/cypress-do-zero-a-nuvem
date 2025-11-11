describe("Buscar e exibir o gato escondido na aplicação", () => {
  beforeEach(() => {
    cy.visit("src/index.html");
  });
  it("Deve buscar o gato escondido e exibi-lo na aplicação", () => {
    cy.get("#cat").invoke("show");
    cy.get("#cat").should("be.visible");
  });
});
