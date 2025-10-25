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

 test('Navigate to Explore', async ({ page }) => {
    //Check Explore menu items 
  await page.locator('nav').getByRole('link', { name: 'EXPLORE', exact: true }).first().click();
  await expect.soft(page).toHaveURL('https://www.wildhut.com/the-saunas')

/*Solution attempt 1: Cannot get the hover to work
  await page.locator('nav').getByRole('link', { name: 'EXPLORE', exact: true }).first().click();
  await page.locator('nav').getByRole('link', { name: 'EXPLORE', exact: true }).first().hover();
   await expect(page.locator('#comp-m8dbnn4v_r_comp-m8dbj9xtmoreContainer0label')).toContainText('Features');
   await expect(page.locator('#comp-m8dbnn4v_r_comp-m8dbj9xtmoreContainer1label')).toContainText('Options');
   await expect(page.locator('#comp-m8dbnn4v_r_comp-m8dbj9xtmoreContainer2label')).toContainText('FAQs');
*/
 /*Solution attempt 2: cannot get the hover to work
  await page.getByRole('link', { name: 'EXPLORE' }).click();
   await page.getByRole('link', { name: 'EXPLORE', exact: true }).hover();
 */  await page.getByRole('link', { name: 'Features' }).click();

 });

  test('Navigate to Features', async ({ page }) => {
    //Select Features from Explore menu
  await page.locator('nav').getByRole('link', { name: 'EXPLORE', exact: true }).first().click();
  await page.locator('nav').getByRole('link', { name: 'EXPLORE', exact: true }).first().hover();
  await page.getByRole('link', { name: 'Features' }).click();
  //Trying to see if 'THE WILDHUT DIFFERENCE' is scrolled to be visible but not working
  await expect.soft(page.getByLabel('main content').getByRole('heading', { name: 'THE WILDHUT DIFFERENCE' })).toBeVisible();
 });

 });