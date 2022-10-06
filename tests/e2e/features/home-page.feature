Feature: Homepage

  Scenario: I navigate to the documentation
    Given I navigate to the homepage
    When The page is loaded
    And I click on the documentation button
    Then I see the documentation page
    Then Screen matches the base image "Documentation"

  Scenario: I navigate to the documentation and wait for three seconds before snapshot comparison
    Given I navigate to the homepage
    When The page is loaded
    And I click on the documentation button
    Then Screen matches the base image "Documentation" after 2 seconds

