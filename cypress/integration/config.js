Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test for js errors that you can notice in browser's console
    return false
  })