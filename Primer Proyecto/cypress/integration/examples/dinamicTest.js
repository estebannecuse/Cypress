/// <reference types="cypress"/>


describe('My first test suite', function()
{
    it('My first case', function(){
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

        // intercept lleva dos objetos , el primero es reqeustObject y el segundo es responseObject 
        // cypress escucha esta call, no la hace . Y pregunta si queres recibir la respuesta posta o si queres un mok
        cy.intercept({
            method : 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }, 
        {
            statusCode: 200,
            body:[{
                    "book_name": "RestAssured with Java",
                    "isbn": "LSA",
                    "aisle": "2303"
                }]
        }).as('bookretrievals')


        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@bookretrievals').then(({request,response}) =>{
            // expect(response.body).to.have.length(1)
            cy.get('tr').should('have.length',response.body.length+1) 
            
        }) // tengo que esperar aca que se cumpla la promesa
        cy.get('p').should('have.text','Oops only 1 Book available')

        //length of the repsonse array = rows of the table 
        //valido el length 




    })
})