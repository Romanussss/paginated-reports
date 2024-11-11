// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './src/tests',
    timeout: 30000,
    retries: 1,
    use: {
        headless: true,
    },
    reporter: 'html',
});
