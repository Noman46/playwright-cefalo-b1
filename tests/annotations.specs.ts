// import { test, expect, type Page } from '@playwright/test';

// test.describe('annotations examples', () => {

//     test('should allow me to add todo items', async ({ page }) => {
//         await page.waitForTimeout(5000);
//         console.log("Test ==== 1")
//     });

//     test('should clear text input field when an item is added', async ({ page }) => {
//         console.log("Test ==== 2")

//     });

//     test('should append new items to the bottom of the list', async ({ page }) => {
//         console.log("Test ==== 3")
//     });
//     test('Feature only relevant for Chrome', async ({ browserName }) => {
//         test.skip(browserName !== 'chromium', 'This feature is only relevant in Chrome');
//         console.log("Only test run chromium")
//     });

//     test('test login page fast 1', { tag: '@smoke', }, async ({ page }) => {
//         console.log("smoke test 1");
//     })

//     test('test login page fast 2', { tag: '@smoke', }, async ({ page }) => {
//         console.log("smoke test 2");
//     })
//     test('test login page fast 3', { tag: ['@smoke', '@sanity'] }, async ({ page }) => {
//         console.log("smoke and sanity test");
//     })

//     test('test full report @sanity', async ({ page }) => {
//         console.log("sanity test");
//     })


//     test('test login page', {
//         annotation: {
//             type: 'task-128',
//             description: 'https://nhstdev.atlassian.net/browse/HI-128',
//         },
//     }, async ({ page }) => {
//         console.log("It is a annotation test")
//     });


//     test('Failed this test intentinally 2', async ({ page }) => {
//         expect(2,"Two is not equal to 3").toEqual(3);
//     })
// });
