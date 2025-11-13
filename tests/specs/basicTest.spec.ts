import test, { chromium, expect } from "@playwright/test";
import { Assert } from "assert";

test.describe('My first describe block', () => {

    test('My first test case', async () => {

        const browser = await chromium.launch({ 'headless': false });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { 'waitUntil': 'load' });

        await page.fill("input[name='username']", 'Admin')
        await page.fill("input[name='password']", 'admin123')
        await page.getByRole('button', { 'name': 'Login' }).click();
        await page.getByRole('heading', { 'name': 'Dashboard' }).isVisible();

        await expect(page.getByRole('heading', { 'name': 'Dashboard' })).toHaveText('Dashboard');

    })

})