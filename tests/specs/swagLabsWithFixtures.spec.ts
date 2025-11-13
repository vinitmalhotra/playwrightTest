import { expect } from "@playwright/test";
import { test } from "../fixtures/swagLabsFixture";
import { apiTest } from "../fixtures/apiFixture";


test.describe(' Validate the end to end order submittion scenario', async () => {


    // test.beforeEach(async ({ loginPage }) => {

    //     await loginPage.signup();


    // });

    test('Validate the products page', async ({ page }) => {

        await expect(page.getByText('Products')).toBeVisible();
        await expect(page.locator(".app_logo")).toHaveText('Products');
    })

    test('Validate the itenary Page', async ({ inventoryPage, loginPage }) => {


        await inventoryPage.isElementVisible(inventoryPage.swagLogo);
        await inventoryPage.checkProductLogo('Products');
        await inventoryPage.clickButton(inventoryPage.tabButton);
        await inventoryPage.clickButton(inventoryPage.logoutTab);

        await expect(loginPage.username).toBeVisible();     // is this the right way to do. again creating object?

    })



})

apiTest.only(' Making a GET Call', async ({ GET }) => {

    console.log(GET.status())
    console.log(JSON.stringify(await GET.json()));

})