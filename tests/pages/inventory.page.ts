import { expect, Locator, Page } from "@playwright/test";
import { MenuList } from "../types/types";
import BasePage from "./base.page";
import Login from "./login.page";

class Inventory extends BasePage {

    page: Page;
    constructor(page: Page) {
        super(page);          // this has to be done Mandatory.....
        this.page = page;
    }

    get swagLogo(): Locator {
        return this.page.locator('.app_logo');
    }

    get productLogo(): Locator {
        return this.page.locator("//span[text()='Products']");
    }

    async checkProductLogo(name: string) {
        await expect(this.productLogo).toHaveText(name);
    }

    get tabButton(): Locator {
        return this.page.locator("//button[contains(text(), 'Open Menu')]")
    }

    get allItemsTab(): Locator {
        return this.page.locator("//a[text()='All Items']");
    }
    get aboutTab(): Locator {
        return this.page.locator("//a[text()='About']");
    }
    get logoutTab(): Locator {
        return this.page.locator("//a[text()='Logout']");
    }
    get resetAppStateTab(): Locator {
        return this.page.locator("//a[text()='Reset App State']");
    }

    menuItems(selector: MenuList): Locator {
        return this.page.locator(`//a[text()='${selector}']`);
    }





}

export default Inventory