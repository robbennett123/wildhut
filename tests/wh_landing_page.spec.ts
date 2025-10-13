import { test, expect } from '@playwright/test';

test.describe("Wildhut Basic Page Layouts", () => {
test('Landing Page Layout', async ({ page }) => {

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
  await page.goto('https://www.wildhut.com/');

  //check title
  await expect(page).toHaveTitle('Luxury Outdoor Home Garden Saunas in the UK | Wildhut');

  //check key elements on page
  await expect(page.locator('#comp-mcafhfrl_r_comp-m8dbj9xt0').getByRole('link', { name: 'OUR SAUNAS' })).toBeVisible();
  await expect(page.locator('#comp-mcafhfrl_r_comp-m8dbj9xt0label')).toContainText('OUR SAUNAS');
  await expect(page.getByRole('link', { name: 'EXPLORE' })).toBeVisible();
  await expect(page.locator('#comp-mcafhfrl_r_comp-m8dbj9xt1label')).toContainText('EXPLORE');
  await expect(page.locator('#comp-mcafhfrl_r_comp-m8dbj9xt2').getByRole('link', { name: 'SAUNA LIFE' })).toBeVisible();
  await expect(page.locator('#comp-mcafhfrl_r_comp-m8dbj9xt2label')).toContainText('SAUNA LIFE');
  await expect(page.getByRole('link', { name: 'MAGAZINE', exact: true })).toBeVisible();
  await expect(page.locator('#comp-mcafhfrl_r_comp-m8dbj9xt3label')).toContainText('MAGAZINE');
  await expect(page.getByRole('link', { name: 'ENQUIRE' })).toBeVisible();
  await expect(page.locator('#comp-mcafhfrl_r_comp-m8dbj9xt4label')).toContainText('ENQUIRE');
  await expect(page.getByRole('link', { name: 'SHOP' })).toBeVisible();
  await expect(page.locator('#comp-mcafhfrl_r_comp-m8dbj9xt5label')).toContainText('SHOP');
  await expect(page.getByRole('link', { name: 'Wildhut log -lugury outdoor' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'LinkedIn' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Facebook' })).toBeVisible();
  await expect(page.getByLabel('Instagram', { exact: true })).toBeVisible();
  await expect(page.getByLabel('main content').getByText('WILDHUT')).toBeVisible();
  await expect(page.locator('h1')).toContainText('WILDHUT');
  await expect(page.getByText('BEAUTIFUL, EXPERTLY CRAFTED,')).toBeVisible();
  await page.getByText('BEAUTIFUL, EXPERTLY CRAFTED,').click();
  await expect(page.getByRole('heading', { name: 'WE ARE WILDHUT' })).toBeVisible();
  await expect(page.locator('#PAGE_SECTIONSvg67b')).toContainText('WE ARE WILDHUT');
  await expect(page.getByRole('heading', { name: 'Much has been made of the' })).toBeVisible();
  await expect(page.locator('#PAGE_SECTIONSvg67b')).toContainText('Much has been made of the health benefits of sauna bathing, and with good reason. Physically, nothing is more invigorating than a deep, healthy sweat every day. Tension fades. Muscles unwind. Mentally, we emerge relaxed, revived and ready for whatever life may bring. We at Wildhut have designed a hand-crafted, fully customisable, range of luxury outdoor saunas for your home or business. We operate from our HQ in the southeast of the UK where we\'ve designed our high end Wildhut saunas to last, to function beautifully and to complement any environment. Built by highly skilled craftsmen in Estonia and then shipped internationally, our beautiful garden saunas fuse form and function to set new standards in comfort, sustainability and luxury.');
});
});

test.describe("Validate landing page images", () => {

});
