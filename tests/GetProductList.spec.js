const {test, expect} = require('@playwright/test');

test('Get product name list', async({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();

    const userName = page.locator('#username');
    const password = page.locator('#password');
    const signInButton = page.locator('#signInBtn');
    const cardTitles = page.locator('.card-body a');

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await userName.type("rahulshettyacademy");
    await password.type("Learning@830$3mK2");
    await signInButton.click();

    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());
    const allTitals = await cardTitles.allTextContents();
    console.log("**********************")
    console.log(allTitals);
    
});