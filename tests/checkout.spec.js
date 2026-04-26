const { test, expect } = require('@playwright/test');
const path = require('path');

const appUrl = `file://${path.resolve(__dirname, '../index.html')}`;

async function login(page) {
  await page.goto(appUrl);
  await page.fill('input[name="username"]', 'test_user');
  await page.fill('input[name="password"]', 'password123');
  await page.click('button[type="submit"]');
  await expect(page.locator('.product-list')).toBeVisible();
}

test.describe('Checkout Scenarios', () => {
  test('Login, add Laptop and Smartphone, checkout', async ({ page }) => {
    await login(page);
    await page.click('.add-to-cart'); // Laptop
    await page.click('.add-to-cart-typo'); // Smartphone (intentional typo)
    await page.click('.cart-link');
    await page.click('.checkout-btn');
    await expect(page.locator('.success-message')).toBeVisible();
  });

  test('Login, attempt checkout with empty cart', async ({ page }) => {
    await login(page);
    await page.click('.cart-link');
    page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('Your cart is empty!');
      await dialog.dismiss();
    });
    await page.click('.checkout-btn');
  });
});
