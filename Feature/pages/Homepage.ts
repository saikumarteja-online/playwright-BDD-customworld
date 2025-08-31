import { BasePage } from "../pages/Basepage"
import { Page , Locator} from "playwright";
import {HomepageLocators} from "../Locators/HomepageLocators"
export class Homepage extends BasePage {

     locators: HomepageLocators;
    constructor(page: Page) {
        super(page);
        this.locators=new HomepageLocators(page)
    }

    async navigateToHomePage() {
        await this.page.goto('https://sfcc-dev.skechers.com/');
       
    }

    async naviagatePLP(){
        
        await this.locators.men.hover()
        await this.page.waitForTimeout(2000);
        await this.locators.casualSneakers.click()
    }
    
}