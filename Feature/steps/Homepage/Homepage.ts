import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../../hooks/world";

When("user launch the application",async function (this: CustomWorld) {
  await this.pages.homepage.navigateToHomePage();
  
  console.log("application launched");
});

Given("user naviagate to PLP page", { timeout: 60000 } ,async function (this: CustomWorld) {
  await this.pages.homepage.naviagatePLP();
  console.log("navigated to PLP page");
});
