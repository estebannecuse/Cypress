Feature: End to end Ecommerce validation
Scenario: Ecommerce products delivery
Given I am on Eccomerce Page
When I login to the application
And I add items to cart and checkout
And Validate the total price limit
Then Select the country submit and verify Thank you


# si no pongo "ouitline" ignora la tabla 
Scenario Outline: Ecommerce products delivery
Given I am on Eccomerce Page
When I login to the application portal
| username           | password |
| rahulshettyacademy | learning |
And I add items to cart and checkout
And Validate the total price limit
Then Select the country submit and verify Thank you