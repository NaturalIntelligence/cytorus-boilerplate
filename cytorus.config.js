
const generateCucumberReport = require('./config/cucumberReport');

module.exports = {
    // setup:{
    //     "step_definitions": "steps" //relative to "cypress/integration"
    // },
    runConfig: {
        docker: {
            //env: [ "CYPRESS_RECORD_KEY",  "CYPRESS_VIDEO" ]
            "cypress" : "8.0.0"
        },
        // tian: {
        //     url: "http://localhost:3377/api/projects/articlestack-chrome/builds"
        // },
    },
    init: async function(){
        //start your application or poll if it starts before initiating tests
    },
    end: async function(){
        await generateCucumberReport();
    },
    threshold: require("./config/thresholdStrategies")
}
