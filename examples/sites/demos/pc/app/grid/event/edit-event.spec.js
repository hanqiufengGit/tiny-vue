import { test, expect } from '@playwright/test'

test('单元格被激活编辑时会触发该事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-event#event-edit-event')
  await page.getByText('GFD 科技 YX 公司').first().click()
  await expect(page.getByText('激活 editDisable 事件')).toBeVisible()

  await page.getByText('WWWW 科技 YX 公司').click()
  await expect(page.getByText('激活编辑事件')).toBeVisible()
  await page.getByText('激活编辑事件').click()
  await expect(page.getByText('触发关闭编辑事件')).toBeVisible()
})
