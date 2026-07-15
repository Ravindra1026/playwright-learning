const {test, expect} = require('@playwright/test');

test('Get all product from List', async({browser})=> 
{
    const context = await browser.newContext();
    const page = await context.newPage();

    const email = page.locator('#userEmail');
    const password = page.locator('#userPassword');
    const loginButton = page.locator('#login')
    const cardTitles = page.locator('.card-body b');

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await email.type("ravindra02@mailinator.com");
    await password.type("Test@123");
    await loginButton.click();
    await page.waitForLoadState('networkidle');
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
    



});