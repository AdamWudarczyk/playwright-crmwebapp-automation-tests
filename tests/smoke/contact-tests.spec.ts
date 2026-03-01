import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ContactsPage } from '../../pages/ContactsPage';

test.describe('Smoke - Contact', () => {

    test.beforeEach(async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();
        await login.login();
    });

    test('Create new Contact', async ({ page }) => {
        const contacts = new ContactsPage(page);
        await contacts.openContacts();
        await contacts.waitUntilLoaded();
        const firstName = 'Adam';
        const lastName = `Test_${Date.now()}`;
        await contacts.createContact(firstName, lastName);
        await contacts.assertContactCreated(`${firstName} ${lastName}`);
    });

    test('Required fields validation when creating Contact', async ({ page }) => {
        const contacts = new ContactsPage(page);
        await contacts.openContacts();
        await contacts.waitUntilLoaded();
        await contacts.tryCreateWithoutRequiredFields();
        await expect(contacts.errorMessage).toBeVisible();
    });
});