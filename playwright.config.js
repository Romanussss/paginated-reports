// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './src/tests', // Update this path if your tests are located elsewhere
    timeout: 30000, // Set a timeout for tests (30 seconds)
    retries: 1, // Set number of retries for failed tests
    use: {
        headless: true, // Run tests in headless mode in CI
    },
    reporter: 'html', // Generate an HTML report for Playwright tests
});
