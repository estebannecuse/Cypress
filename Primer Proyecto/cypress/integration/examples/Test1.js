/// <reference types="cypress"/>


describe('My first test suite', function()
{
    it('My first case', function(){
        //test steps
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type("ca");
        cy.wait(2000);
        cy.get(".product:visible").should('have.length', 4);
        cy.get('.products').find('.product').should('have.length',4);
        //parent child chaining 

        cy.get('.products').as('productLocator');

        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click();

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
        // para imprimir el texto del logo 
        // lo que sea que se obtenga de resolver la promesa , lo toma la variable "logoElement"
        // si no hago esto cypress no puede manejar la asincroneidad por atras 
        
        const logo = cy.get('.brand').then(function(logoElement) {
            cy.log(logoElement.text())
        })

        //para chequear que el logo este correcto
        cy.get('.brand').should('have.text', 'GREENKART')
    })
})