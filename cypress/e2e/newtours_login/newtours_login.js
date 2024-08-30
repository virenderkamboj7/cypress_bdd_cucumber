import {Given, Then, When} from "cypress-cucumber-preprocessor/steps";


Given('Open website', ()=> {

    // Reading data from excel
    // https://www.youtube.com/watch?v=D3MO51bXlI8
    // cy.parseXlsx('cypress/fixtures/Book1.xlsx').then((excelData)=>{
    //     const rowCount = Cypress.$(excelData[0].data).length
    //     cy.log('rowCount: ' +rowCount)

    //     /*for(let i=0; i<rowCount; i++){
    //         let row = excelData[0].data[i]
    //         cy.log(row)
    //     }
    //     for(let i=0; i<rowCount; i++){
    //         let row = excelData[1].data[i]
    //         cy.log(row)
    //     }**/

    //     let sheet = 0
    //     let row = 0
    //     let col = 0        
    //     let fistSHeetr0c0 = excelData[sheet].data[row][col]
    //     cy.log('fistSHeetr0c0: '+fistSHeetr0c0)
    // })

    //This for test case
    cy.visit("https://demo.guru99.com/test/newtours/")
})

When('Enter valid credentials {string}, {string}', (userName, password)=>{
    cy.get("input[name='userName']").type(userName)
    cy.get("input[name='password']").type(password)
    cy.get("input[value='Submit']").click()
})

When('Enter valid credentials', (datatable)=>{
    datatable.hashes().forEach(element => {
        cy.get("input[name='userName']").type(element.user)
        cy.get("input[name='password']").type(element.password)
    });
    cy.get("input[value='Submit']").click()
})

When('Enter valid credentials from excel', ()=>{
        // Reading vaild username and password from excel
    cy.parseXlsx('cypress/fixtures/Book1.xlsx').then((excelData)=>{
        let sheetNo = 0       
        let username = excelData[sheetNo].data[2][0]
        cy.log('username: '+username)
        let password = excelData[sheetNo].data[2][1]
        cy.log('password:' +password);  
    })
    cy.get("input[value='Submit']").click()

})

Then('Verify valid login', ()=> {
    cy.get("tbody tr td h3").should('have.text', 'Login Successfully')

})