/// <reference types="cypress"/>


describe('My first test suite', function()
{
    it('My first case', function(){
        //test steps
        // ALERTS ****
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
      
        cy.get('#opentab').then(function(e){
            const url = e.prop('href');
            cy.visit(url)
            cy.origin(url, () => {
                cy.get("div.sub-menu-bar a[href*='about']").click()
            })


        })

    })
})