import { Locator, Page } from "@playwright/test";


export class PlppageLocators {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }


     casualSneakersUPCPosition(position :number): Locator {
        return this.page.locator('.row.product-grid.js-product-tile-container .col-6').nth(position).filter({ has: this.page.locator('//img') });
    }
}