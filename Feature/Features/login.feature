Feature:Orders

Scenario:User placing SLSU order
    When user launch the application
    Given user naviagate to PLP page
    Then user navigate to PDP page
    Then user add product to cart
    Then user navigate to cart page
    Then user proceed to checkout
    Then user enter shipping details
    Then user enter payment details
    Then user place the order
    Then user verify order confirmation page
    
    

