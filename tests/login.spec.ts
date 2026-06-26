import { test, expect } from '@playwright/test'

test('muestra error con credenciales invalidas', async ({ page }) => {
  await page.goto('http://localhost:5173')

  await page.fill('#email', 'wrong@email.com')
  await page.fill('#password', 'wrongpass')
  await page.click('button[type="submit"]')

  await expect(page.locator('.message')).toHaveText('Credenciales invalidas')
})

test('muestra exito con credenciales correctas', async ({ page }) => {
  await page.goto('http://localhost:5173')

  await page.fill('#email', 'admin@example.com')
  await page.fill('#password', 'password123')
  await page.click('button[type="submit"]')

  await expect(page.locator('.message')).toHaveText('Inicio de sesion exitoso')
})
