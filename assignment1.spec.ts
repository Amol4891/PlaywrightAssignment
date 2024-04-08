import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {

      // Navigate to the website
    await page.goto('https://bstackdemo.com/');
    
    });
test.describe('Demo Test', () => {

            test('test examples', async ({ page , browser }) => {




    //Verify Headers
    const header1 = await page.locator('#offers').textContent();
    const header2 = await page.locator('#orders').textContent();
    const header3 = await page.locator('#favourites').textContent();

    if (header1 === "Offers") {
        console.log("First header is Offers")
    } else {
        console.log("Headers 1 did not matched")
    }

    if (header2 === "Orders") {
        console.log("First header is Orders")
    } else {
        console.log("Headers 2 did not matched")
    }

    if (header3 === "Favourites") {
        console.log("First header is Favourites")
    } else {
        console.log("Headers 3 did not matched")
    }

    // Click on Sign In
    await page.locator("#signin").click()

    // Print placeholder values in username and password fields
    const usernamePlaceholder = await page.locator('div#username>div>div>div').textContent();
    const passwordPlaceholder = await page.locator('div#password>div>div>div').textContent();
    console.log('Username Placeholder:', usernamePlaceholder);
    console.log('Password Placeholder:', passwordPlaceholder);

    // Enter Username and Password
    const userName = 'demouser'
    await page.fill('div#username>div>div', userName);
    await page.fill('div#password>div>div', 'testingisfun99');

    // Click on login 
    await page.click('#login-btn');

    // Verify username
    const actualUserName = await page.locator('.username').textContent();
    if (actualUserName === userName) {
        console.log("Username verified!")
    }

    // Click Logout
    await page.click('#logout');

    // Close the browser
    await browser.close();
  });


});





