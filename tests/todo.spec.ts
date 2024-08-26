import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  test.setTimeout(60000); // Increase timeout to 60 seconds for this test
  await page.goto('/');
});

test.describe('New Todo', () => {
  test('should console log landing url', async ({ page }) => {
    const currentURL =  page.url();
    console.log('The current URL is:', currentURL);
  });
});

