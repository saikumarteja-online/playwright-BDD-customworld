import { Locator, Page } from "@playwright/test";


export class HomepageLocators {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get men(): Locator {
        this.page.waitForSelector('#men');
        return this.page.locator('#men')
    }

    get casualSneakers(): Locator {
        return this.page.locator('#men-shoes-casual-sneakers').first();
    }

     casualSneakersUPCPosition(position :number): Locator {
        return this.page.locator('.row.product-grid.js-product-tile-container .col-6').nth(position).filter({ has: this.page.locator('//img') });
    }
}