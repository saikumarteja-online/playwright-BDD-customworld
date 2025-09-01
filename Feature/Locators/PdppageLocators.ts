import { Locator, Page } from "@playwright/test";

export class PdpPageLocatorss {

    page: Page;
    constructor(page: Page) { 
        this.page = page;
    }

    get medium(): Locator {
        return this.page.getByRole('button', { name: 'medium' });
    }
    get wide(): Locator {
        return this.page.getByRole('button', { name: 'wide' });
    }
    get size(): Locator {
        return this.page.getByRole('button', { name: '9.0' });
    }
    get addToCart(): Locator {
        return this.page.getByRole('button', { name: 'Add to Cart' });
    }
    get cartIcon(): Locator {
        return this.page.locator('#minicart-link');
    }
    
}