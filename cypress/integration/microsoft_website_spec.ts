describe("Microsoft's homepage", () => {
  it("should be accessible from the internet", () => {
    cy.visit("");
  });
  it("should conform to critical a11y accessibility standards", () => {
    cy.injectAxe();
    cy.checkA11y(null, {
      includedImpacts: ["critical"],
    });
  });
  it("should pass the Lighthouse audits", function () {
    cy.lighthouse({
      performance: 15,
      accessibility: 95,
      "best-practices": 70,
      seo: 80,
      pwa: 25,
    });
  });
  it("should allow user option to buy Xbox items", () => {
    cy.contains("Buy Xbox games and consoles").click();
  });

  describe("Xbox items page", () => {
    it("should allow user option to buy Consoles", () => {
      cy.contains("Consoles").click();
    });

    describe("Consoles page", () => {
      it("should show list of consoles", () => {
        cy.get("[aria-label='xbox consoles']").children();
      });
    });
  });
});
