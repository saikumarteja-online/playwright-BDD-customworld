
import { BasePage } from "../pages/Basepage"
import { Page , Locator} from "playwright";
import {PdpPageLocatorss} from "../Locators/PdppageLocators"
export class Pdppage extends BasePage {

     locators: PdpPageLocatorss;
    constructor(page: Page) {
        super(page);
        this.locators=new PdpPageLocatorss(page)
    }

    async addproductToCart(){
        
        await this.locators.medium.click();
        
        await this.locators.size.click();
        
        await this.locators.addToCart.click();
    }

    async navigateToCartPage(){
        
        await this.locators.cartIcon.click();
    }
    
}