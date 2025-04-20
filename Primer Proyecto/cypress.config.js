const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
const ExcelJs= require('exceljs');

async function setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin')(on);

  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  
  // Make sure to return the config object as it might have been modified by the plugin.
  on('task',{
    excelToJsonConverter(filePath){
      const result = excelToJson({
        source: fs.readFileSync(filePath)
      });
        return result;
    }
  })

  on('task',{
   async writeExcelTetst({searchText,replaceText,change,filepath}){
    
        const workbook = new ExcelJs.Workbook();
        await workbook.xlsx.readFile(filepath)
        
    
            const worksheet = workbook.getWorksheet('Sheet1');
            
            const output= await readExcel(worksheet,searchText);
            
            const cell = worksheet.getCell(output.row,output.column+change.colChange);
            cell.value = replaceText;
            await workbook.xlsx.writeFile(filepath);
            
        }
  })
  
  return config;
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

module.exports = defineConfig({
  projectId: "4wwx2f",
  retries:{
    runMode:1,
  },
  env: {
    url : "https://rahulshettyacademy.com"
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents,
    // specPattern: 'cypress/integration/examples/BDD/*.feature'
    specPattern: 'cypress/integration/examples/**/*.js'
  },
});

// test execution results must be in json format. 
// json -> html 
