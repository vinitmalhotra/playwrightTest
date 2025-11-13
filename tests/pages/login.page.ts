import { Locator, Page } from "@playwright/test";

class Login {

    page: Page;
    get url(): string {
        return 'https://www.saucedemo.com/'
    }

    public get username(): Locator {
        return this.page.locator('#user-name')
    }

    private get password(): Locator {
        return this.page.locator('#password')
    }

    private get submit(): Locator {
        return this.page.locator("//input[@type='submit']")
    }

    constructor(page: Page) {
        this.page = page;
    }
    async signup() {
        await this.page.goto(this.url);
        await this.username.fill('standard_user');
        await this.password.fill('secret_sauce');
        await this.submit.click();
    }


}

export default Login