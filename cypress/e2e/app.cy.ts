describe('Angular App E2E Test', () => {
  beforeEach(() => {
    cy.visit('/'); // Visit the home page
  });

  it('should load the app', () => {
    cy.get('h1').should('contain', 'Welcome'); // Adjust this based on your app
  });

  it('should navigate to a different page', () => {
    cy.get('a[href="/about"]').click(); // Click on the About link
    cy.url().should('include', '/about'); // Verify the URL
  });
});
