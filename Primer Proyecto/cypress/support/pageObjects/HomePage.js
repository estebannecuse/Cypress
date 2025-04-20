import ProductPage from "./ProductPage"

class HomePage
{

    goTo(url){
        cy.visit(url)
        //cy.visit(Cypress.env('url')+url)
    }

    login(username, password){
        cy.get("#username").type(username)
        cy.get("#password").type(password)
        //cy.get("#signInBtn").click()
        cy.contains('Sign In').click()
        return new ProductPage()
    }
}

export default HomePage;