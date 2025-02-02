import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
	baseUrl: 'http://localhost:4200', // 👈 Ensure your Angular app runs on this URL
    specPattern: 'cypress/e2e/**/*.cy.ts', // Test file pattern
    supportFile: 'cypress/support/e2e.ts',
  },
});
