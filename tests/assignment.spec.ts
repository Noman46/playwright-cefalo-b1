// import { test, expect } from '@playwright/test';

// test('TODO list action perform', async ({ page }) => {
//   await page.goto('https://demo.playwright.dev/todomvc/#/');

//   // Verify user lands on the page successfully
//   await expect(page).toHaveURL('https://demo.playwright.dev/todomvc/#/');

//   // Add 5 tasks
//   const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'];
//   for (const task of tasks) {
//     await page.getByPlaceholder('What needs to be done?').fill(task);
//     await page.getByPlaceholder('What needs to be done?').press('Enter');
//   }

//   var todoCount = await page.getByTestId('todo-count').innerText();
//   //  verify that all 5 tasks have been added successfully
//   await expect(todoCount).toContain('5');

//   // delete one task and verify that 4 tasks remain
//   const hoverElem= await page.getByText('Task 5');
//   await hoverElem.hover();
//   await page.getByRole('button', { name: 'Delete' }).click();

//   // verify that 4 tasks remain
//   todoCount = await page.getByTestId('todo-count').innerText();
//   await expect(todoCount).toContain('4');

//   // Complete two tasks from the to-do list and filter by "Completed"
//   await page.locator('li').filter({ hasText: 'Task 3' }).getByLabel('Toggle Todo').check();
//   await page.locator('li').filter({ hasText: 'Task 4' }).getByLabel('Toggle Todo').check();
//   await page.getByRole('link', { name: 'Completed' }).click();

//   // Verify that only the two completed tasks are shown
//   todoCount = await page.getByTestId('todo-count').innerText();
//   await expect(todoCount).toContain('2');

//   //  click "Clear Completed"
//   await page.getByRole('button', { name: 'Clear completed' }).click();
//   await page.getByRole('link', { name: 'All' }).click();

//   //  verify that only two tasks remain in the to-do list
//   todoCount = await page.getByTestId('todo-count').innerText();
//   await expect(todoCount).toContain('2');

// });