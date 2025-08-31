import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../../hooks/world";

When("user launch the application",async function (this: CustomWorld) {
  await this.pages.homepage.navigateToHomePage();
  await this.pages.homepage.naviagatePLP();
  console.log("application launched");
});
