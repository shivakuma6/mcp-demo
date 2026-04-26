const { test, expect } = require('@playwright/test');
const path = require('path');

const appUrl = `file://${path.resolve(__dirname, '../index.html')}`;

test.describe('Login Scenarios', () => {
  test('Valid login with correct credentials', async ({ page }) => {
    await page.goto(appUrl);
    await page.fill('input[name="username"]', 'test_user');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');
    await expect(page.locator('.product-list')).toBeVisible();
  });

  test('Invalid login with wrong credentials', async ({ page }) => {
    await page.goto(appUrl);
    await page.fill('input[name="username"]', 'wrong_user');
    await page.fill('input[name="password"]', 'wrongpass');
    await page.click('button[type="submit"]');
    await expect(page.locator('.error-message')).toBeVisible();
  });

  test('Admin login with any password (intentional bug)', async ({ page }) => {
    await page.goto(appUrl);
    await page.fill('input[name="username"]', 'admin');
    await page.fill('input[name="password"]', 'anything');
    await page.click('button[type="submit"]');
    await expect(page.locator('.product-list')).toBeVisible();
  });
});
