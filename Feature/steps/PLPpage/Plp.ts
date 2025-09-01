import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../../hooks/world";


Then("user navigate to PDP page", async function (this: CustomWorld) {
    await this.pages.plppage.clickonUPC(4)
});
