
import { BasePage } from "../pages/Basepage"
import { Page , Locator} from "playwright";
import {HomepageLocators} from "../Locators/HomepageLocators"
export class Plppage extends BasePage {

     locators: HomepageLocators;
    constructor(page: Page) {
        super(page);
        this.locators=new HomepageLocators(page)
    }

    async clickonUPC(position:number){
        await this.locators.casualSneakersUPCPosition(position).click()
    }
    
}