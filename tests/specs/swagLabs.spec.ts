import { test, expect } from "@playwright/test";
import Login from "../pages/login.page";
import Inventory from "../pages/inventory.page";


test.describe(' Validate the end to end order submittion scenario', async () => {

    let login: Login;

    test.beforeEach(async ({ page }) => {

        login = new Login(page);
        await login.signup();


    });

    test('Validate the products page', async ({ page }) => {

        await expect(page.getByText('Products')).toBeVisible();
        await expect(page.locator(".app_logo")).toHaveText('Products');
    })

    test('Validate the itenary Page', async ({ page }) => {

        const inventory = new Inventory(page)
        await inventory.isElementVisible(inventory.swagLogo);
        await inventory.checkProductLogo('Products');
        await inventory.clickButton(inventory.tabButton);
        await inventory.clickButton(inventory.logoutTab);

        await expect(login.username).toBeVisible();     // is this the right way to do. again creating object?

    })
})