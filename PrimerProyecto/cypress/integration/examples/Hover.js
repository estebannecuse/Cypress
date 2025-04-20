/// <reference types="cypress"/>


describe('My first test suite', function()
{
    it('My first case', function(){
        //test steps
        // ALERTS ****
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        cy.get('.mouse-hover-content').invoke('show') //esto valida si efectivamente el mouse hover se aplica 
        cy.contains('Top').click()
        cy.url().should('include','top')
        
        // si no necesito mostrarlo y solo hacerle click directamente:
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')

    })
})