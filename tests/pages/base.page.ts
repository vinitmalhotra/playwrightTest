import { expect, Locator, Page } from "@playwright/test";

class BasePage {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async isElementVisible(locator: Locator) {
        await expect(locator).toBeVisible();
    }

    async clickButton(locator: Locator) {
        await locator.click();
    }


}

export default BasePage;