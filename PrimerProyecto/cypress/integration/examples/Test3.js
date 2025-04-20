/// <reference types="cypress"/>


describe('My first test suite', function()
{
    it('My first case', function(){
        //test steps
        //check y radio buttons
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        //si quiero seleccionar mas de un checkbox, tengo que encontrar algo en comun para hacer esto 
        
        cy.get('input[type="checkbox"]').check() // asi selecciono todos los checkbox 

        //asi paso un array y selecciona de acuerdo a lo que le pase adentro , en este caso selecciona
        // los checkbox con value option2 y option 3 
        cy.get('input[type="checkbox"]').check(['option2','option3'])

        //Static dropdown

        cy.get('select').select('option2').should('have.value','option2')

        // Dynamic dropdowns
        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text() === "India" )
            {
                cy.wrap($el).click()
            }
        })
         // handle visibility 

        cy.get('#hide-textbox').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')


    })
})