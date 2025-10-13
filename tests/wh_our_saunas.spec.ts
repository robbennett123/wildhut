import { test, expect } from '@playwright/test';

test.describe("Navigation from 'Our Saunas'", () => {

test.beforeEach(async({ page }) => {
 await page.goto('https://www.wildhut.com/');
});
test('To the  saunas', async ({ page }) => {
 
//accept cookies
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

//OHK
await page.locator('nav').getByRole('link', { name: 'OUR SAUNAS', exact: true }).first().click();
await page.locator('nav').getByRole('link', { name: 'OUR SAUNAS', exact: true }).first().hover();
await page.getByRole('link', { name: 'OHK - 2 Person Outdoor Sauna' }).click();
await expect.soft(page).toHaveTitle('OHK - 2 Person Outdoor Sauna | Wildhut');
await expect.soft(page).toHaveURL('https://www.wildhut.com/ohk-2-person-outdoor-sauna')
await expect.soft(page.getByRole('img', { name: 'WH_Sauna_Range_logos_OHK.png' })).toBeVisible();
await page.getByRole('heading', { name: 'OHK Duck board optional extra' }).click();
await expect.soft(page.getByLabel('main content').getByRole('heading')).toContainText('OHK Duck board optional extra');



//TULI
await page.locator('nav').getByRole('link', { name: 'OUR SAUNAS', exact: true }).first().click();
await page.locator('nav').getByRole('link', { name: 'OUR SAUNAS', exact: true }).first().hover();
await page.getByRole('link', { name: 'TULI - 4 Person Outdoor Sauna' }).click();
await expect.soft(page).toHaveTitle('TULI - 4 Person Outdoor Sauna | Wildhut');
await expect.soft(page).toHaveURL('https://www.wildhut.com/tuli-4-person-outdoor-sauna')
await expect.soft(page.getByRole('img', { name: 'WH_Sauna_Range_logo_ALL-02.png' })).toBeVisible();
await expect.soft(page.getByLabel('main content').locator('span')).toContainText('TULI With Porch Untreated Timber Exterior');



//VESI
await page.locator('nav').getByRole('link', { name: 'OUR SAUNAS', exact: true }).first().click();
await page.locator('nav').getByRole('link', { name: 'OUR SAUNAS', exact: true }).first().hover();
await page.getByRole('link', { name: 'VESI - 6 Person Outdoor Sauna' }).click();
await expect.soft(page).toHaveTitle('VESI - 6 Person Outdoor Sauna | Wildhut');
await expect.soft(page).toHaveURL('https://www.wildhut.com/vesi-6-person-outdoor-sauna')
await expect.soft(page.getByRole('img', { name: 'WH_Sauna_Range_logos_VESI_edited.png' })).toBeVisible();
await expect.soft(page.getByLabel('main content').getByRole('heading')).toContainText('VESI');


//MAA
await page.locator('nav').getByRole('link', { name: 'OUR SAUNAS', exact: true }).first().click();
await page.locator('nav').getByRole('link', { name: 'OUR SAUNAS', exact: true }).first().hover();
await page.getByRole('link', { name: 'MAA - 8 Person Outdoor Sauna' }).click();
await page.getByText('OHK Duck board optional extra').click();
await page.getByText('OHK Duck board optional extra').click();
await page.getByText('OHK Duck board optional extra').click();
await expect.soft(page).toHaveTitle('MAA - 8 Person Outdoor Sauna | Wildhut');
await expect.soft(page).toHaveURL('https://www.wildhut.com/maa-8-person-outdoor-sauna')
await expect.soft(page.getByRole('img', { name: 'WH_Sauna_Range_logos_MAA_edited.png' })).toBeVisible();
await expect.soft(page.getByLabel('main content').getByRole('heading')).toContainText('MAA');

});

});





