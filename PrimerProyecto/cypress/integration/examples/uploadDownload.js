describe('upload-download test', ()=>{
    it("verify excel upload download",()=>{

        const FilePath = Cypress.config("fileServerFolder")+"/Cypress/Primer Proyecto/cypress/downloads/download.xlsx"
        cy.visit("https://rahulshettyacademy.com/upload-download-test/index.html")
        cy.get("#downloadButton").click();
        cy.task('writeExcelTetst',{searchText: "Apple",replaceText:350,change:{rowChange:0,colChange:2},filepath:FilePath})
        cy.get("#fileinput").selectFile(FilePath)
        //importante sobre la linea 8, el boton para el upload tiene que tener type+file, no hay workaround, sino el "selectFile" de cypress no funciona

    })
})