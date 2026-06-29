const {test, expect} = require('@playwright/test');

test.only('Get Product name from List', async({browser})=> 
{
    const context = await browser.newContext();
    const page = await context.newPage();

    const userName = page.locator('#username');
    const password = page.locator('#password');
    const signInButton = page.locator('#signInBtn');

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await userName.type("rahulshettyacademy");
    await password.type("Learning@830$3mK2");
    await signInButton.click();

    //console.log(await page.locator(''))



});