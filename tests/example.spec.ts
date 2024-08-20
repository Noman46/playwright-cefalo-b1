// import { test, expect } from '@playwright/test';

// test('Form', async ({ page }) => {
//   await page.goto('https://playwright-practice.netlify.app/');
//   await page.getByPlaceholder("Enter your username").fill("Noman")
//   await page.getByLabel("Email").fill("some@mail.com")
//   await page.getByPlaceholder("Enter your password").fill("1qazZAQ!")
//   await page.getByRole('button', { name: "Submit" }).click()
//   await expect(page.getByText("Your registration form submitted successfully")).toBeVisible()

// });

// test('Special button', async ({ page }) => {
//   await page.goto('https://playwright-practice.netlify.app/');
//   await page.getByTestId('special-button').click()
//   await page.waitForTimeout(3000);
//   await expect(page.getByText("You have clicked the Special Button")).toBeVisible()

// });

// test('Drop Down', async ({ page }) => {
//   await page.goto('https://playwright-practice.netlify.app/');
//   await page.getByRole('combobox', { name: "Select an option" }).click()
//   await page.waitForTimeout(1000);
//   await page.getByLabel("Select an option").selectOption("Option 3")
//   await page.waitForTimeout(1000);
//   await expect(page.getByText("You have selected: Option 3")).toBeVisible()

// });
// test('Check Box', async ({ page }) => {
//   await page.goto('https://playwright-practice.netlify.app/');
//   await page.getByLabel("Check me").check()
//   await page.waitForTimeout(3000);
// });



// test('Get element by CSS', async ({ page }) => {
//   await page.goto('https://playwright-practice.netlify.app/');
//   const usernameInput = await page.locator('input[placeholder="Enter your username"]').fill("My user Name");

//   //const usernameInput = await page.locator('input').nth(1).fill("My user Name");
//   await page.waitForTimeout(6000);
// });

// test('Get element by xpath', async ({ page }) => {
//   //  //input[@placeholder="Enter your username"]//parent::div//child::label//following-sibling::input
//   await page.goto('https://playwright-practice.netlify.app/');
//   await page.waitForTimeout(6000);
// });

// interface LoginCredential {
//   username: string;
//   password: string;
//   message: string;
// }

// const loginCredentials: LoginCredential[] = [
//   {
//     username: "standard_user",
//     password: "secret_sauce",
//     message: "success"
//   },
//   {
//     username: "locked_out_user",
//     password: "secret_sauce",
//     message: "Epic sadface: Sorry, this user has been locked out."
//   },
//   {
//     username: "unknown",
//     password: "secret_sauce",
//     message: "Epic sadface: Sorry, this user has been locked out."
//   }
// ];

//  loginCredentials.forEach((logindata) => {
//   test.only(`Log in with user ${logindata.username}`, async ({ page }) => {
//     test.skip(logindata.username === "unknown", 'Do not run this for unknown user');
//     await page.goto('https://www.saucedemo.com/');
//     await page.getByRole('textbox', { name: "Username" }).fill(`${logindata.username}`)
//     await page.getByRole('textbox', { name: "Password" }).fill(`${logindata.password}`)
//     await page.getByRole('button', { name: "Login"}).click()
//     if(logindata.message != "success") {
//       await expect(page.getByRole("heading",{name : logindata.message})).toBeVisible()
//     }
//     else{
//       await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
//     }
//   });
//  })

// test('Login and verify something', async ({ page }) => {
//   test.slow()
//   await page.goto('https://letcode.in/signin');
//   page.getByPlaceholder('Enter registered email').fill("iamnomanib@gmail.com");
//   const password = page.getByPlaceholder('Enter password').fill("123456");
//   page.getByRole('button', { name: 'LOGIN' }).click()

// });

// test("User should able to select options and will see messages", async ({
//   page,
// }) => {
//   await page.goto("https://playwright-practice.netlify.app/");
//   await expect(page.getByText("Dropdown Example")).toBeVisible();
//   await page
//     .getByLabel("Select an option")
//     .selectOption(["Option 1", "Option 2", "Option 3"]);

//   await page.getByLabel("Select an option").selectOption({ label: "Option 1" });
//   await expect(page.getByText("You have selected: Option 1")).toBeVisible();

//   await page.getByLabel("Select an option").selectOption({ label: "Option 2" });
//   await expect(page.getByText("You have selected: Option 2")).toBeVisible();

//   await page.getByLabel("Select an option").selectOption({ label: "Option 3" });
//   await expect(page.getByText("You have selected: Option 3")).toBeVisible();
// });


// test('Form test', async ({ page }) => {
//   await page.goto('https://katalon-demo-cura.herokuapp.com/profile.php#login');
//   await page.getByRole("textbox", {name: "Username"}).fill("John Doe")
//   await page.getByPlaceholder("Password").fill("ThisIsNotAPassword")
//   await page.getByRole('button', { name: "Login" }).click()
//   await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment")

// });


// test('Verify Login with invalid credentials', async ({ page }) => {
//   await page.goto('https://katalon-demo-cura.herokuapp.com/profile.php#login');
//   await page.getByLabel("Username").fill("Noman")
//   await page.getByLabel("Password").fill("ThisIsNotValid")
//   await page.getByRole('button', { name: "Login" }).click()
//  await expect(page.getByText("Login failed! Please ensure the username and password are valid.")).toBeVisible()
// });

// test('Verify Login with valid credentials', {tag: ['@smoke', '@login']},async ({ page }) => {
//   await page.goto('https://katalon-demo-cura.herokuapp.com/profile.php#login');
//   await page.getByLabel("Username").fill("John Doe")
//   await page.getByLabel("Password").fill("ThisIsNotAPassword")
//   await page.getByRole('button', { name: "Login" }).click()
//   await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment")
//   await page.waitForTimeout(3000);
// });
// test('Book an appointment',{tag: '@sanity'},async ({ page }) => {
//   await page.goto('https://katalon-demo-cura.herokuapp.com/profile.php#login');
//   await page.getByLabel("Username").fill("John Doe")
//   await page.getByLabel("Password").fill("ThisIsNotAPassword")
//   await page.getByRole('button', { name: "Login" }).click()
//   await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment")
 

//   await page.selectOption("#combo_facility","Seoul CURA Healthcare Center")
//   await page.getByRole("checkbox",{name:"Apply for hospital readmission"}).check()
//   //await page.getByRole("radio",{name:"None"}).check();
//   await page.getByLabel("None").check()
//   await page.getByRole("textbox",{name:"Visit Date (Required)"}).fill("11/11/2024")
//   await page.getByRole("textbox",{name:"Comment"}).fill("This is my comment")
//   await page.getByRole("button",{name:"Book Appointment"}).click()
//   await page.waitForTimeout(3000);
// });

