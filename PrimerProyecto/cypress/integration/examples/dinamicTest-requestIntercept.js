/// <reference types="cypress"/>


describe('My first test suite', function()
{
    it('My first case', function(){
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',(req) =>{
            req.url='https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'
            req.continue((res)=>{ //aca la req se manda al server y tomo la respuesta en la var res
                expect(res.statusCode).to.equal(403)
            })
        }).as('dummyUrl')
        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@dummyUrl')

    })
})