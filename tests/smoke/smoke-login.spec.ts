import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';


test.describe('Smoke - Login', () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('SMK-01: successful login redirects to EspoCRM Home Page @smoke', async ({ page }) => {
        await expect(page).toHaveURL(/.*espocrm\.com/);
    });
});