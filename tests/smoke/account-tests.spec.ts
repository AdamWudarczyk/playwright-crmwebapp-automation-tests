import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { AccountsPage } from '../../pages/AccountsPage';

test.describe('Smoke - Account', () => {

    test.beforeEach(async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();
        await login.login();
    });

    test('Create new Account', async ({ page }) => {

        const accounts = new AccountsPage(page);

        await accounts.openAccounts();
        await accounts.waitUntilLoaded();

        const accountName = `Company_${Date.now()}`;

        await accounts.createAccount(accountName);
        await accounts.assertAccountCreated(accountName);
    });
});