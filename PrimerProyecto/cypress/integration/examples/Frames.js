/// <reference types="cypress"/>
/// <reference types="cypress-iframe"/>

import 'cypress-iframe'

describe('My first Frame suite', function()
{
    it('Frame case', function(){
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       cy.frameLoaded('#courses-iframe')

       //cy.iframe es como que hace un switch a iframe 
       cy.iframe().find("a[href*='mentorship']").eq(0).click()

       cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)

    })
})