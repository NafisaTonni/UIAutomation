import { test, expect } from '@playwright/test';

test('test', async function({page}){
  await page.goto('https://web-arogga.vercel.app/');
  await page.locator('div').filter({ hasText: 'Hello, UserAccount & Orders' }).nth(3).click();
  await page.locator('#phone').fill('01684881848');
  await page.locator('div').filter({ hasText: /^Send$/ }).nth(1).click();
  await page.getByPlaceholder('Enter your OTP number').fill('1234');
  await page.locator('div').filter({ hasText: /^Login$/ }).nth(1).click();
  await page.locator('#search-input').click();
  await page.locator('#search-input').fill('napa');
  await page.goto('https://web-arogga.vercel.app/search?_product_type=all&_search=napa');
  await page.locator('div:nth-child(3) > .SearchHorizontal_right__UEyBc > .my-10 > .arogga-btn').click();
  await page.getByText('12 Tablets (1 Strip)').nth(1).click();
  await page.locator('div').filter({ hasText: /^1 Item$/ }).getByRole('img').click();
  await page.getByText('Place Order').click();
  await page.locator('div').filter({ hasText: '0 Item৳80Shopping' }).locator('svg').nth(3).click();
})

//npx playwright codegen