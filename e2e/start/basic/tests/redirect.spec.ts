import { test } from '@playwright/test'

test.describe('redirects', () => {
  test.describe('navigating to a route that redirects', () => {
    test('internal redirect', async ({ page }) => {
      await page.goto('/')
      await page.getByRole('link', { name: 'redirect-internal' }).click()
      await page.waitForURL('http://localhost:3000/posts')
    })

    test('external redirect', async ({ page }) => {
      await page.goto('/')
      await page.getByRole('link', { name: 'redirect-external' }).click()
      await page.waitForURL('http://example.com/')
    })
  })

  test.describe('directly visiting a route that redirects', () => {
    test('internal redirect', async ({ page }) => {
      await page.goto('/redirect-internal')
      await page.waitForURL('http://localhost:3000/posts')
    })

    test('external redirect', async ({ page }) => {
      await page.goto('/redirect-external')
      await page.waitForURL('http://example.com/')
    })
  })
})
