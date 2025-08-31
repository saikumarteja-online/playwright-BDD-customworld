import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../../hooks/world";

Given("user naviagate to PLP page", { timeout: 60000 } ,async function (this: CustomWorld) {
  await this.pages.plppage.clickonUPC(4)
  console.log("navigated to PLP page");
});
