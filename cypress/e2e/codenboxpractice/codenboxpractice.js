import {Given, Then, When} from "cypress-cucumber-preprocessor/steps";

Given("I successfully land to the application", () => {
    cy.visit('https://codenboxautomationlab.com/')
})

When("I click on practice button", ()=> {
    cy.get("a[href='http://codenboxautomationlab.com/practice/']").click({force:true})
})

Then("I should see the title of the page is {string}", (title) => {
    cy.get('.page-title').invoke('text').then((text1) =>{
        expect(text1.trim()).to.equal(title)
    })
})