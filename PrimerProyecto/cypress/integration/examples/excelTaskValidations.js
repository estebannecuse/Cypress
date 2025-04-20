/// <reference types="cypress"/>
const neatCSV = require('neat-csv')

describe('sesion test',()=>{
    it('sesion test',()=>{
        cy.LoginApi().then(function(){
            cy.visit("https://rahulshettyacademy.com/client",{
                onBeforeLoad : function(window){
                    window.localStorage.setItem("token",Cypress.env('token'))
                }
            })
        })


        cy.get(".card-body button:last-of-type").eq(1).click();
        cy.get("[routerlink*='cart']").click();
        cy.contains("Checkout").click();
        cy.get("[placeholder*='Country']").type('ind')
        cy.get(".ta-results button").each(($el, index, $list)=>{
            if($el.text().includes(' India')){
                cy.wrap($el).click()
            }
        })
        cy.get(".action__submit").click()
        cy.wait(2000)
        cy.get(".order-summary button").contains('Excel').click();

       
        const filePath = Cypress.config("fileServerFolder")+"/cypress/Primer Proyecto/cypress/downloads/order-invoice-ashika.xlsx"
       cy.task('excelToJsonConverter',filePath).then(function(result){
        cy.log(result.data[1].A);
        expect(result.data[1].B).to.equal();
       })
    })
})