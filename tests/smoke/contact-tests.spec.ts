import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ContactsPage } from '../../pages/ContactsPage';


test('Smoke - Create new Contact', async ({ page }) => {

    const login = new LoginPage(page);
    const contacts = new ContactsPage(page);

    await login.goto();
    await login.login();

    await contacts.openContacts();
    await contacts.waitUntilLoaded();

    const firstName = 'Adam';
    const lastName = `Test_${Date.now()}`;

    await contacts.createContact(firstName, lastName);
    await contacts.assertContactCreated(`${firstName} ${lastName}`);
});