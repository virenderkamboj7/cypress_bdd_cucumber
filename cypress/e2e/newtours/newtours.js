import {Before, After, Given, Then, When} from "cypress-cucumber-preprocessor/steps";

Before(()=>{
    cy.reload()
})

After(()=>{
    cy.reload()
})

Given("precondition", ()=> {
    cy.visit("https://demo.guru99.com/test/newtours/")
})

When("action", ()=> {
    cy.title().should('eq', "Welcome: Mercury Tours");
})

Then("testable outcome", ()=>{
    cy.title().should('eq', "Welcome: Mercury Tours");
})