@tag
Feature: Employee Login
  I want to use this template for check Employee login

  @tag1
  Scenario: Check Employee Login Test
    Given I Open Browser with url "http://orangehrm.qedgetech.com"
    Then I Should see login Page
    When I Enter Empname "Ramya123"
    And I Enter Emppwd "Qedge123!@#"
    And I Click Login
    Then I Should See Login Page
    When I click Logout
    Then I should see Login page
    When I close Browser
