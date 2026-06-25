const {test} = require('@playwright/test');

test('Browser context Playwright test', async({browser})=>
{
    // chrome - plugins/ cookies 
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

});


test.only('Page Playwright test', async({page})=>
{
      
    await page.goto("https://rahulshettyacademy.com/practice");
    console.log(await page.title());
    expect(page).toHaveTitle("QA Automation Practice Sites | Playwright, Selenium & API Testing");
});