/// <reference types="cypress"/>


describe('My first test suite', function()
{
    it('My first case', function(){
        
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
       
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => { //recorro todos los indices de la columna seleccionada
           
            const text = $el.text() // guardo el contenido de text de cada indice en la const
            if(text.includes("Python")){
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){ // paso a la siguiente columna despues de resolver la promesa , no puedo aplicar .text() aca directo porque es jquery
                    const priceText = price.text()
                    expect(price).to.equal("25")
                }) 
            }
            
        })

    })
})