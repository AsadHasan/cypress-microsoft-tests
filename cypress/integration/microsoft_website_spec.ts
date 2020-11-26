describe("Microsoft's homepage", () => {
  it("should be accessible from the internet", () => {
    cy.visit("");
  });
  // TODO: Works locally buit fails on Browserstack. Fix on Browserstack.
  it.skip("should conform to critical a11y accessibility standards", () => {
    cy.injectAxe();
    cy.checkA11y(null, {
      includedImpacts: ["critical"],
    });
  });
  it("should pass the Lighthouse audits", { browser: "chrome" }, () => {
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
      it("should allow user option to buy Xbox Series S", () => {
        cy.contains("Xbox Series S").click();
      });

      describe("XBOX Series S page", () => {
        it("should give option to add item to wish list", () => {
          cy.contains("Wish list");
        });
      });
    });
  });
});
