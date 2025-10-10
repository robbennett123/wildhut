import { test, expect } from '@playwright/test';

test.describe("ikea purchase flow", () => {
test('basic purchase flow', async ({ page, context }) => {
  // Grant geolocation permission before navigating
  await context.grantPermissions(['geolocation'], { origin: 'https://www.ikea.com' });

  await page.goto('https://www.ikea.com/gb/en/');
  //click accept cookies
  await page.getByRole('button', { name: 'Accept all' }).click();

  await expect(page).toHaveTitle('Affordable Furniture and Home Inspiration - IKEA UK');
  await expect(page.getByRole('link', { name: 'IKEA Home' })).toBeVisible();
  await page.getByRole('link', { name: 'IKEA Home' }).click();
  await expect(page.getByRole('combobox', { name: 'Search for products, inspiration or new arrivals' })).toBeVisible();
  await page.getByRole('combobox', { name: 'Search for products, inspiration or new arrivals' }).click();
  await page.getByRole('combobox', { name: 'Search for products, inspiration or new arrivals' }).fill('table');
  await page.getByRole('button', { name: 'Search', exact: true }).click();

  // No need for manual override, geolocation permission is granted
  await page.goto('https://www.ikea.com/gb/en/search/?q=table');
  await page.getByRole('link', { name: 'LACK Side table, white, 55x55 cm LACK Side table, white, 55x55 cm' }).click();
  await expect(page.getByRole('button', { name: 'Add to shopping bag' })).toBeVisible();
  await page.getByRole('button', { name: 'Add to shopping bag' }).click();

  //continue shopping
  await expect(page.getByRole('button', { name: 'Go to shopping bag' })).toBeVisible();
  await page.waitForSelector('.modal, .overlay', { state: 'detached', timeout: 5000 }).catch(() => {});
  await page.getByRole('button', { name: 'Go to shopping bag' }).click();

  //validate shopping bag has 1 item
  await page.getByRole('combobox', { name: 'Search for products, inspiration or new arrivals' }).scrollIntoViewIfNeeded();
  await page.getByRole('link', { name: 'Shopping bag, 1 items' }).scrollIntoViewIfNeeded();

  await expect(page.getByRole('link', { name: 'Shopping bag, 1 items' })).toBeVisible();

  //search for lamp
  await page.getByRole('combobox', { name: 'Search for products, inspiration or new arrivals' }).click();
  await page.getByRole('combobox', { name: 'Search for products, inspiration or new arrivals' }).fill('lamp');
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('link', { name: 'ÅRSTID Table lamp, brass/white Price £' }).click();

  //increase quantity to 3 and add to bag
  await page.getByRole('button', { name: 'Increase quantity' }).click();
  await page.getByRole('button', { name: 'Increase quantity' }).click();
  await page.getByRole('button', { name: 'Add 3 items to shopping bag' }).click();
  await page.getByRole('button', { name: 'Go to shopping bag' }).click();
  await expect(page.getByRole('link', { name: 'Shopping bag, 4 items' })).toBeVisible();

  //validate correct items in bag 
  await expect(page.getByLabel('ÅRSTID, brass/white', { exact: true }).locator('span')).toContainText('ÅRSTID');
  await expect(page.getByLabel('LACK, white', { exact: true }).locator('span')).toContainText('LACK');

  //Remove table from bag and check bag has 3 items
  await page.getByRole('button', { name: 'Remove LACK, white, 55x55 cm' }).click();
  await page.getByRole('button', { name: 'Close' }).click();

  await expect(page.getByRole('link', { name: 'Shopping bag, 3 items' })).toBeVisible();
  await page.getByRole('link', { name: 'Shopping bag, 3 items' }).click({ force: true });

  //validate only lamp is in bag
  await expect(page.getByLabel('ÅRSTID, brass/white', { exact: true }).locator('span')).toContainText('ÅRSTID');

  //remove lamp from bag and validate bag is empty
  await page.getByRole('button', { name: 'Remove ÅRSTID, brass/white' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await expect(page.locator('h1')).toContainText('Your shopping bag is empty');
  await expect(page.getByRole('link', { name: 'Shopping bag' })).toBeVisible();
  });
  });
