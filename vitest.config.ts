import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './vitest.setup.ts', // Ensure this path is correct
        include: ['src/tests/**/*.test.ts'], // Only include Vitest tests
        coverage: {
            reporter: ['text', 'json', 'html'],
            exclude: ['node_modules', 'test/'],
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
