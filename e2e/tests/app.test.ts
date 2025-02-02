import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
  console.log('Ensure Angular app is running on http://localhost:4200');
});

test('should load the app', async ({ page }) => {
   await page.goto('/'); //This will resolve to 'http://localhost:4200/' on playwright config baseURL

  // Ensure the app title is present
  const title = await page.title();
  expect(title).toBe('angular-project');  // Replace with your app's title

  // Check for a specific element, e.g., a header
  //const header = await page.locator('h1');
 // await expect(header).toHaveText('Welcome to Angular');
});

test('should navigate to a different page', async ({ page }) => {
  await page.goto('/ngrx-store'); // Home page
 // await page.click('text=About'); // Clicking the "About" link (example)
  //await expect(page).toHaveURL('http://localhost:4200/about'); // Check URL
  //const header = await page.locator('h2');
  //await expect(header).toHaveText('About Us');  // Verify about page text
});
