const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Login Test - Successful login with standard user', async ({ page }) => {
    const loginPage = new LoginPage(page); // Create an instance of the LoginPage class, passing the 'page' object.
    await loginPage.gotoLoginPage(); // Go to the login page using the 'gotoLoginPage' method.
    await expect(page).toHaveTitle(/Swag Labs/); // Expect a title "to contain" a substring.
    await loginPage.login('standard_user', 'secret_sauce'); // Call the 'login' method of the LoginPage instance, passing the username and password.
    // Expect the URL to be 'https://www.saucedemo.com/inventory.html'
    await expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
});