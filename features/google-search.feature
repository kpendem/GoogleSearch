Feature: Google should let user query for desired text

  Scenario: Google search
    Given I browse to web site "http://www.google.com"
    Then I should have text field to enter my query
    When I enter "fuse school" in the query field
    And I submit the query
    Then I should see some results
