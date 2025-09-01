import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../../hooks/world";

Then("user add product to cart", async function (this: CustomWorld) {
    await this.pages.pdppage.addproductToCart()
});

Then('user navigate to cart page',  async function (this: CustomWorld) {
       await this.pages.pdppage.navigateToCartPage()   
});