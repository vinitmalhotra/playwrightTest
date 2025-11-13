import { expect, request } from "@playwright/test";
import { test } from "../fixtures/swagLabsFixture";
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

    test('Validate the itenary Page', async ({ inventoryPage }) => {


        await inventoryPage.isElementVisible(inventoryPage.swagLogo);
        await inventoryPage.checkProductLogo('Products');
        await inventoryPage.clickButton(inventoryPage.tabButton);
        await inventoryPage.clickButton(inventoryPage.logoutTab);

        await expect(login.username).toBeVisible();     // is this the right way to do. again creating object?

    })

    test('TO make a POST Call', async ({ request }) => {

        const response = await request.get('https://jsonplaceholder.typicode.com/posts', { 'ignoreHTTPSErrors': true })
        expect(response.status()).toBe(200);
        console.log(JSON.stringify(await response.json()));
    })
})