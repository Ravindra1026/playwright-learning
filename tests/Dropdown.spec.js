const{test, expect} = require('@playwright/test');

test.only('Select Dropdown',async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const email = page.locator('#userEmail');
    const password = page.locator('#userPassword');
    const loginButton = page.locator('#login');
    const dropdown = page.locator('select.form-control');
    await dropdown.selectOption('consult');
    //await page.pause();

    const radio = page.locator('.checkmark');
    const okayButton = page.locator('#okayBtn');
    await radio.last().click();
    await okayButton.click();
    





    await page.pause();
    

});