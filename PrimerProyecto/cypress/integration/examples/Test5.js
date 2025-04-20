/// <reference types="cypress"/>


describe('My first test suite', function()
{
    it('My first case', function(){
        //test steps
        // ALERTS ****
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //***** IMPORTANTE ******
        // Como cypress no puede manejar child tabs, es decir no se puede cambiar de ventana en el navegador 
        //tenemos que hacer un woraraound, que es cuando voy a hacer click en el elemento que me lleva a esa ventana, le saco el atributo target
        cy.get("#opentab").invoke('removeAttr','target').click()

        // no se puede hacer testing en cross domain 
        // hay que hacer un workaround 
       // cy.get("#navbarSupportedContent a[href*='about']").click(); // esto da error porque cypress detecta otro domain y no lo puede manejar
        //entonces tengo que traer esta linea dentro de la funcion , todo lo que haga en el nuevo domain lo tengo que poner en la func
        cy.origin("https://www.qaclickacademy.com",() =>{
            cy.get("#navbarSupportedContent a[href*='about']").click(); 
            cy.get('.col-lg-5 > .section-title > h2').should('contain', 'QAClick Academy ')
        })



    })
})