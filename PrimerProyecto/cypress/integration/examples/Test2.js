/// <reference types="cypress"/>


describe('My second test suite', function()
{
    it('My second case', function(){
        //test steps
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type("ca");
        cy.wait(2000);
        

        cy.get('.products').as('productLocator');

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            // con each itero por la lista de elementos. 
            const texto = $el.find('h4.product-name').text()
            // .text extrae el contenido de texto del elemento 
            if(texto.includes('Cashews'))
            {
                cy.wrap($el).find('button').click()
                // como el $el es una promesa, no puedo hacerle click, lo deprecaron 
                // lo que tengo que hacer es ponerlo dentore de wrap y ahi luego de resuelto, puedo hacerle click 
                
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
        
        
    })
})