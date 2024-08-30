Feature: newtour login validation

    # Login with valid credentials

Background:
    Given Open website


@smoke @sanity
Scenario Outline: Login with valid credentials
    When Enter valid credentials <user>, <password>
    Then Verify valid login

Examples:
    | user  | password  |
    |'test' | 'Test@123'|
    |'test' | 'Test@123'|  

@regression
Scenario: Login with valid credentials Approach 2
    Given Open website
    When Enter valid credentials
    | user  | password  |
    |test   | Test@123| 
    Then Verify valid login

Scenario: Login with valid credentials (from excel data)
    Given Open website
    When Enter valid credentials from excel
    Then Verify valid login    
