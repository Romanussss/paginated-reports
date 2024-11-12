import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './src/tests',
    timeout: 30000,
    retries: 1,
    use: {
        headless: true,
    },
    reporter: [['html', { outputFolder: 'playwright-report' }]], // Optional output path
});
