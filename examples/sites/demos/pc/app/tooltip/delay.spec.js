import { test, expect } from '@playwright/test'

test('测试延迟显示隐藏', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tooltip#delay')

  const button1 = page.getByRole('button', { name: '延迟 2s 出现' })
  const tip1 = page.getByRole('tooltip', { name: '延迟 2000ms 出现' })
  const button2 = page.getByRole('button', { name: '延迟 2s 关闭' })
  const tip2 = page.getByRole('tooltip', { name: '延迟 2000ms 关闭' })
  const button3 = page.getByRole('button', { name: '2s 后自动隐藏' })
  const tip3 = page.getByRole('tooltip', { name: '2000ms 后自动隐藏' })

  // 延迟出现
  await button1.hover()
  await page.waitForTimeout(100)
  await expect(tip1).toBeHidden()
  await button1.hover() // button1 上方
  await page.waitForTimeout(2010)
  await expect(tip1).toBeVisible()

  // 延迟关闭
  await button2.hover() // button2 上方
  await page.waitForTimeout(10)
  await expect(tip2).toBeVisible()
  await page.mouse.move(0, 0)
  await page.waitForTimeout(2010)
  await expect(tip2).toBeHidden()

  // 自动隐藏
  await button3.hover() // button3 上方
  await page.waitForTimeout(10)
  await expect(tip3).toBeVisible()
  await page.waitForTimeout(2010)
  await expect(tip2).toBeHidden()
})
