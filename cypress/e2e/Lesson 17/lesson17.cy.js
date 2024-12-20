describe("Preliminary test suite", () => {
  beforeEach(() => {
    cy.visit("https://difmark.com/");
  });

  it("Search Check", () => {
    cy.get(".header-inner__search-input").click().type("Fifa");
    cy.contains("View All").click();
  });
});
