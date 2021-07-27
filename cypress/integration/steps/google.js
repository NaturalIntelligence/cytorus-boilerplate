/// <reference types="cypress" />

Given(/^I open ([^ ]*)$/, (url) => {
    console.log("visiting the page", url)
    cy.visit(url)
  });
  
When(/I search for "(.*)"/, (str) => {
    cy.get("input[type='text']").type(str);
    cy.get("input[type='submit']").eq(0).click();
    //cy.get("input[type='submit']").eq(1).click();
});

step("I see first link pointing to {string}", (url) => {
    cy.get(".g").eq(0).find("a").eq(0).should("have.attr", "href", url);  
});
  