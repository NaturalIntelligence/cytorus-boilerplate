#!
@top
Feature: Search on Google page
  
  @done
  Scenario: Search something on Google
    Given I open https://www.google.com/
    When I search for "cytorus github"
    Then I see first link pointing to "https://github.com/NaturalIntelligence/cytorus"
  
  @skip
  Scenario: This scenario will be skipped
    Given I start here
    Then I open https://www.google.com/
    Then I search for "cytorus issues"
    Then I see first link pointing to "https://github.com/NaturalIntelligence/cytorus"
    