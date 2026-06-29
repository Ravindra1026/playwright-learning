const {test, expect} = require('@playwright/test');

test('Valid Login Test', async({browser})=>
    {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(await page.title());

        await page.locator('#username').type("rahulshettyacademy");
        await page.locator('#password').type("Learning@830$3mK2");
        await page.locator('#signInBtn').click();

        console.log(await page.locator('.my-4').first().textContent());
        await expect(page.locator('.my-4').first()).toContainText("Shop Name");

    
    }
);

