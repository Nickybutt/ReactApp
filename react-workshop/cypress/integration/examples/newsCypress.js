dexcribe("first tests", () => {
  it("visit your app", () => {
    cy.visit("http://localhost:3000/");
  });

  cy.get("btn btn-secondary").click();
});
