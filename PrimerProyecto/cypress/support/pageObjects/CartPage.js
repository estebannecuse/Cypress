import ConfirmationPage from "./ConfirmationPage";

class CartPage {

    checkOut(){
        cy.contains('button','Checkout').click()
        return new ConfirmationPage()
    }
    sumOfProducts() {
        let sum = 0;
        return cy.get("tr td:nth-child(4) strong") // Retorna una promesa
            .each(($e) => {
                const amount = Number($e.text().split(' ')[1].trim());
                sum += amount;
            })
            .then(() => sum); // Retorna el valor acumulado de sum
    }
}

export default CartPage;