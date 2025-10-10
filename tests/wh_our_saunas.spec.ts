import { test, expect } from '@playwright/test';

test.describe("Navigation from 'Our Saunas'", () => {
test('To OHK', async ({ page }) => {
  await page.goto('https://www.wildhut.com/');

  //accept cookies
await page.getByRole('button', { name: 'Accept' }).click();

//OHK
await page.locator('nav').getByRole('link', { name: 'OUR SAUNAS', exact: true }).first().click();
await page.locator('nav').getByRole('link', { name: 'OUR SAUNAS', exact: true }).first().hover();
await page.getByRole('link', { name: 'OHK - 2 Person Outdoor Sauna' }).click();
await expect(page).toHaveTitle('OHK - 2 Person Outdoor Sauna | Wildhut');
await expect(page).toHaveURL('https://www.wildhut.com/ohk-2-person-outdoor-sauna')
await expect(page.getByRole('img', { name: 'WH_Sauna_Range_logos_OHK.png' })).toBeVisible();


//TULI
await page.locator('nav').getByRole('link', { name: 'OUR SAUNAS', exact: true }).first().click();
await page.locator('nav').getByRole('link', { name: 'OUR SAUNAS', exact: true }).first().hover();
await page.getByRole('link', { name: 'TULI - 4 Person Outdoor Sauna' }).click();
await expect(page).toHaveTitle('TULI - 4 Person Outdoor Sauna | Wildhut');
await expect(page).toHaveURL('https://www.wildhut.com/tuli-4-person-outdoor-sauna')
await expect(page.getByRole('img', { name: 'WH_Sauna_Range_logos_TULI.png' })).toBeVisible();


//VESI
await page.locator('nav').getByRole('link', { name: 'OUR SAUNAS', exact: true }).first().click();
await page.locator('nav').getByRole('link', { name: 'OUR SAUNAS', exact: true }).first().hover();
await page.getByRole('link', { name: 'VESI - 6 Person Outdoor Sauna' }).click();
await expect(page).toHaveTitle('VESI - 6 Person Outdoor Sauna | Wildhut');
await expect(page).toHaveURL('https://www.wildhut.com/vesi-6-person-outdoor-sauna')
await expect(page.getByRole('img', { name: 'WH_Sauna_Range_logos_VESI.png' })).toBeVisible();



//MAA
await page.locator('nav').getByRole('link', { name: 'OUR SAUNAS', exact: true }).first().click();
await page.locator('nav').getByRole('link', { name: 'OUR SAUNAS', exact: true }).first().hover();
await page.getByRole('link', { name: 'MAA - 8 Person Outdoor Sauna' }).click();
await expect(page).toHaveTitle('MAA - 8 Person Outdoor Sauna | Wildhut');
await expect(page).toHaveURL('https://www.wildhut.com/maa-8-person-outdoor-sauna')
await expect(page.getByRole('img', { name: 'WH_Sauna_Range_logos_MAA.png' })).toBeVisible();


});

});




