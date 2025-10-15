import { test, expect } from '@playwright/test';

//added a hook for page navigation and cookie acceptance
test.describe("Navigation from 'Explore'", () => {

  test.beforeEach(async({ page }) => {
   
    // accept cookies
    await page.context().addCookies([
      {
        name: 'consent-policy',
        value: 'true',
        domain: 'www.wildhut.com', // Use domain instead of url for cookies
        path: '/',
        httpOnly: false,
        secure: true,
        sameSite: 'Lax'
      },
    ]);
     await page.goto('https://www.wildhut.com/');
  });

 test('Navigate to Enquire', async ({ page }) => {
    //Check Explore menu items 
  await page.locator('nav').getByRole('link', { name: 'ENQUIRE', exact: true }).first().click();
  expect(page.url()).toBe('https://www.wildhut.com/book-a-consultation');


  //select some text on the Enquire page
const capturedText = await page.locator('text=We\'d love you to get in touch!').first().innerText();
//const capturedText = "rob test"; // Simplified for demonstration

await page.waitForTimeout(2000); //nasty hack to allow time to see the click - better to use a proper wait 
// but there seems to be a screen refresh which clears the box

//put the captured text into the First Name field
await page.getByRole('textbox', { name: 'First name' }).fill(capturedText);

 });

 });


