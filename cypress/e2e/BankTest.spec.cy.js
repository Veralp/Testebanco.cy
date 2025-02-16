describe("Account Balance", () => {
  it("Login Success", () => {
    cy.visit("https://rhuantac.github.io/vaga-qa/");
    //cy.get(":nth-child(1) > .text-xl").contains("valor");
    //cy.get(".bg-green-500").click();
    //cy.get(".bg-green-500").should("exist").and("be.visible").click();
    //cy.get(".grid > :nth-child(1) > .p-2").click("valor");
    // cy.get(":nth-child(2) > .text-xl").type("saque");
    //cy.get(":nth-child(2) > .text-xl").next("input").type("saque");
    cy.get("input").type("saque", { force: true });
    // cy.get(".bg-red-500").click();
    //cy.get(".bg-red-500").click({ force: true });
    //cy.get("#id-do-elemento").click();
    //cy.get(":nth-child(2) > .text-xl").click();
    cy.get(":nth-child(2) > .text-xl").click({ force: true });
    //cy.get('[type="text"]').type("Maria");
    cy.get('[type="text"]').type("Maria", { force: true });
    //cy.get("#quantidade").type(42);
    //cy.get("#quantidade").should("exist").type(42);
    //cy.get(":nth-child(3) > .bg-blue-500").click();
    cy.get(":nth-child(3) > .bg-blue-500").click({ force: true });
    cy.get(':nth-child(3) > [type="number"]');
    cy.get(".inset-0 > .bg-white > .text-2xl");
    cy.get(".inset-0 > .bg-white > .text-2xl").invoke("css", "display", "none");
    cy.get(".inset-0 > .bg-white").contains("Entendi").click();
  });
});
