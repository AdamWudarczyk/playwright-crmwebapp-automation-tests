import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AccountsPage extends BasePage {

    readonly createButton: Locator;
    readonly nameInput: Locator;
    readonly saveButton: Locator;
    readonly recordHeader: Locator;

    constructor(page: Page) {
        super(page);

        this.createButton = page.locator('[data-action="create"]');
        this.nameInput = page.getByRole('textbox').first();
        this.saveButton = page.locator('[data-action="save"]');
        this.recordHeader = page.locator('h3.page-header, .page-header');
    }

    async waitUntilLoaded(): Promise<void> {
        await expect(this.createButton).toBeVisible({ timeout: 15000 });
    }

    async openAccounts(): Promise<void> {
        await this.openModule('Account');
    }

    async createAccount(name: string): Promise<void> {
        await this.createButton.click();
        await this.nameInput.fill(name);
        await this.saveButton.click();
    }

    async assertAccountCreated(name: string): Promise<void> {
        await expect(this.recordHeader).toContainText(name, { timeout: 15000 });
    }
}