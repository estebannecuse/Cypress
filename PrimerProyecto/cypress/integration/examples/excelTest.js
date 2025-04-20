const ExcelJs= require('exceljs');

async function writeExcelTetst(searchText,replaceText,change,filepath){

    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(filepath)
    

        const worksheet = workbook.getWorksheet('Sheet1');
        
        const output= await readExcel(worksheet,searchText);
        
        const cell = worksheet.getCell(output.row,output.column+change.colChange);
        cell.value = replaceText;
        await workbook.xlsx.writeFile(filepath);
        
    }

async function readExcel(worksheet,searchText){
        let output = {row:-1,column:-1};
        worksheet.eachRow((row,rowNumber) =>{
            row.eachCell((cell, columnNumber)=>{
                if(cell.value === searchText){
                    output.row=rowNumber;
                    output.column=columnNumber;
                } 
            })
        })
        return output;
    }

    //update Mango Price to 350
    writeExcelTetst("Mange",350,{rowChange:0, colChange:2},"C:/Users/esteb/Downloads/exceldownloadTest.xlsx");


