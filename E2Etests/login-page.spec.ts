import { test, expect } from '@playwright/test';

test.describe('LoginPage', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:4200/login')
    });


    test('should show login form and sumbit', async ({ page }) => {
        await page.fill('[data-testid = "input-last-name"]', 'Davidenko');
        await page.fill('[data-testid = "input-password"]', 'admin');
        await page.click('[data-testid = "login-button"]');

        await expect(page).toHaveURL(/localhost:4200/)
    })

})