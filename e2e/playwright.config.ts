import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e/tests',  // Specify E2E test directory
  retries: 2, // Retry tests on failure
  workers: 1, // Run tests in a single worker (can increase for parallel execution)
  use: {
    baseURL: 'http://localhost:4200', // Angular's default dev server URL
    browserName: 'chromium', // Default browser (can also use 'firefox' or 'webkit')
    headless: true, // Run in headless mode (set to false to see the browser)
    viewport: { width: 1280, height: 720 }, // Set viewport size
    actionTimeout: 10000, // Timeout for each action
  },
  projects: [
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'] },
    },
	{
    name: 'firefox',
    use: { ...devices['Desktop Firefox'] },
   },
    {
    name: 'webkit',
    use: { ...devices['Desktop Safari'] },
  },
    {
      name: 'mobile',
      use: { ...devices['Pixel 5'] },
    },
  ],
});
