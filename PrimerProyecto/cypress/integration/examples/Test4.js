/// <reference types="cypress"/>


describe('My first test suite', function()
{
    it('My first case', function(){
        //test steps
        // ALERTS ****
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#alertbtn").click()
        cy.get('[value="Confirm"]').click()
        // Browser events ****
        // window:alert 

        cy.on('window:alert',(string)=>{
            expect(string).to.equal("Hello , share this practice page and share your knowledge")
        })

        cy.on('window:aceptar',(string)=>{
            expect(string).to.equal("Aceptar")
        })
    })
})