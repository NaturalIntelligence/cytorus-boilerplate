
const generateCucumberReport = require('./config/cucumberReport');
// const localApp = require("./pizza-app/server");

module.exports = {
    // setup:{
    //     "step_definitions": "steps" //relative to "cypress/integration"
    // },
    runConfig: {
        // tian: {
        //     url: "http://localhost:3377/api/projects/articlestack-chrome/builds"
        // },
    },
    init: async function(){
        //start your application or poll if it starts before initiating tests
        // localApp.listen( 3332, "localhost", () =>{
        //     console.log("Local application started on port 3332");
        // })
    },
    end: async function(){
        // localApp.close();
        await generateCucumberReport();
    },
    threshold: require("./config/thresholdStrategies")
}
