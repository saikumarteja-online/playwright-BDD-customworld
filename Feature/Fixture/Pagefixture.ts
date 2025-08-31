import { Page } from "@playwright/test";
import {Homepage} from "../pages/Homepage"
import {Plppage} from "../pages/Plppage"

export class Pagefixture {

    page: Page;
    homepage: Homepage ;
    plppage: Plppage ;
    constructor(page: Page) {
        this.page = page;
        this.homepage = new Homepage(this.page);
        this.plppage = new Plppage(this.page);
    }
}