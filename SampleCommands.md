```bash
#Run specific file
npx cytorus run --spec cypress/integration/features/google.feature

#All tests will be skipped due to '#!'
npx cytorus run --spec cypress/integration/features/useless.feature

#Run '@only' tests Or all tests excluding '@skip' tests
npx cytorus run

#Run using tag expression
npx cytorus run --tags "not @wip"

#Run for a story
npx cytorus run --story "US004"

#DEBUG on test selection criteria
DEBUG=cytorus npx cytorus run --story "US004"

#Run for a page
npx cytorus run --via "home page"
npx cytorus run --not-via "home page"

#Run tests starting from product page
npx cytorus run --from "product page"

#Run tests by their positions. All examples when their position s not given
npx cytorus run --only "3,5" --spec cypress/integration/features/pizza.feature

#Run particular example. Skip if no examples on given scenario position
npx cytorus run --only "3.2,5.2" --spec cypress/integration/features/pizza.feature

#Run all but skip particular scenarios and examples. Also skip if marked with @skip
npx cytorus run --skip "1,5.1,5.3" --spec cypress/integration/features/pizza.feature

#Run 1st test of all feature files
npx cytorus run --only '1'

# Useless --tags "@skip" because @skip will be skipped anyway
npx cytorus run --tags "@skip" --spec cypress/integration/features/pizza.feature

# Run all test not marked with @multi and @skip
npx cytorus run --tags "not @multi" --spec cypress/integration/features/pizza.feature
npx cytorus run --tags "@multi but not @2nd" --spec cypress/integration/features/pizza.feature

#Remember to use quotes for string
npx cytorus run --story "US001" --spec "cypress/integration/features/*.feature"

#Run all the examples doesn't matter what filter is used
npx cytorus run --story US005


```