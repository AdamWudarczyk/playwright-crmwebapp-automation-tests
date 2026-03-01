import { type Page, type Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly url: string;


    constructor(page: Page) {
        this.page = page;
        this.url = 'https://demo.eu.espocrm.com/';
    }

    async goto(): Promise<void> {
        await this.page.goto(this.url);
    }
}