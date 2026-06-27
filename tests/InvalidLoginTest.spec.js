const {test, expect} = require('@playwright/test');

test.only('Invalid Login Test', async({browser})=> 
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

    await page.locator('#username').type("rahulshetty");
    await page.locator('#password').type("Learning@830$3mK2");
    await page.locator('#signInBtn').click();
    console.log(await page.locator('[style*="block"]').textContent());
    await expect(page.locator('[style*="block"]')).toContainText("Incorrect username/password.");





})

