import { ISwagLabsApp } from "../interfaces/IswagLabsapp";
import { test as base } from "@playwright/test";
import BasePage from "../pages/base.page";
import Inventory from "../pages/inventory.page";
import Login from "../pages/login.page";

export const test = base.extend<ISwagLabsApp>
    (
        {
            basePage: async ({ page }, use) => await use(new BasePage(page)),
            inventoryPage: async ({ page }, use) => await use(new Inventory(page)),
            loginPage: async ({ page }, use) => {
                const loginPage = new Login(page);
                await loginPage.signup(); // Precondition: signup before using loginPage in tests
                await use(loginPage);
            }

        }
    )



export const myFunction = (id: number, name: string): string => {
    return name;
}
