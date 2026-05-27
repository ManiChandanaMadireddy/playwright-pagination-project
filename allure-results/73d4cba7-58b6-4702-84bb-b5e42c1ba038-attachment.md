# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: webTables.spec.js >> DemoQA Web Tables - CRUD + Validation >> should delete a user
- Location: tests\webTables.spec.js:50:3

# Error details

```
Error: expect(locator).not.toContainText(expected) failed

Locator: locator('.rt-tbody .rt-tr-group').first()
Expected substring: not "John"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "not toContainText" with timeout 5000ms
  - waiting for locator('.rt-tbody .rt-tr-group').first()

```

```yaml
- banner:
  - link:
    - /url: https://demoqa.com
    - img
- img
- text: Elements
- img
- list:
  - listitem:
    - link "Text Box":
      - /url: /text-box
      - img
      - text: Text Box
  - listitem:
    - link "Check Box":
      - /url: /checkbox
      - img
      - text: Check Box
  - listitem:
    - link "Radio Button":
      - /url: /radio-button
      - img
      - text: Radio Button
  - listitem:
    - link "Web Tables":
      - /url: /webtables
      - img
      - text: Web Tables
  - listitem:
    - link "Buttons":
      - /url: /buttons
      - img
      - text: Buttons
  - listitem:
    - link "Links":
      - /url: /links
      - img
      - text: Links
  - listitem:
    - link "Broken Links - Images":
      - /url: /broken
      - img
      - text: Broken Links - Images
  - listitem:
    - link "Upload and Download":
      - /url: /upload-download
      - img
      - text: Upload and Download
  - listitem:
    - link "Dynamic Properties":
      - /url: /dynamic-properties
      - img
      - text: Dynamic Properties
- img
- text: Forms
- img
- img
- text: Alerts, Frame & Windows
- img
- img
- text: Widgets
- img
- img
- text: Interactions
- img
- img
- text: Book Store Application
- img
- heading "Web Tables" [level=1]
- button "Add"
- textbox "Type to search"
- button:
  - img
- table:
  - rowgroup:
    - row "First Name Last Name Age Email Salary Department Action":
      - columnheader "First Name"
      - columnheader "Last Name"
      - columnheader "Age"
      - columnheader "Email"
      - columnheader "Salary"
      - columnheader "Department"
      - columnheader "Action"
  - rowgroup:
    - row "Alden Cantrell 45 alden@example.com 12000 Compliance EditDelete":
      - cell "Alden"
      - cell "Cantrell"
      - cell "45"
      - cell "alden@example.com"
      - cell "12000"
      - cell "Compliance"
      - cell "EditDelete":
        - img
        - img
    - row "Kierra Gentry 29 kierra@example.com 2000 Legal EditDelete":
      - cell "Kierra"
      - cell "Gentry"
      - cell "29"
      - cell "kierra@example.com"
      - cell "2000"
      - cell "Legal"
      - cell "EditDelete":
        - img
        - img
- group:
  - button "First" [disabled]
  - button "Previous" [disabled]
  - button "Next" [disabled]
  - button "Last" [disabled]
- text: Page
- strong: 1 of 1
- combobox:
  - option "Show 10" [selected]
  - option "Show 20"
  - option "Show 30"
  - option "Show 40"
  - option "Show 50"
- contentinfo: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | 
  2  | const { test, expect } = require('@playwright/test');
  3  | const { WebTablesPage } = require('../pages/webTablesPage');
  4  | const testData = require('../utils/testData');
  5  | 
  6  | test.describe('DemoQA Web Tables - CRUD + Validation', () => {
  7  | 
  8  |   let webTable;
  9  | 
  10 |   test.beforeEach(async ({ page }) => {
  11 |     webTable = new WebTablesPage(page);
  12 |     await webTable.navigate();
  13 |   });
  14 | 
  15 |   // ✅ Positive Test - Add User
  16 |   test('should add a new user successfully', async () => {
  17 |     await webTable.addUser(testData.user1);
  18 | 
  19 |     await webTable.searchUser(testData.user1.firstName);
  20 | 
  21 |     await webTable.verifyUserPresent(testData.user1.firstName);
  22 |   });
  23 | 
  24 |   // ✅ Negative Test - Invalid Data
  25 |   test('should not submit with invalid data', async ({ page }) => {
  26 |     await webTable.addUser(testData.invalidUser);
  27 | 
  28 |     // Expect modal still open (validation failed)
  29 |     await expect(page.locator('#submit')).toBeVisible();
  30 |   });
  31 | 
  32 |   // ✅ Edge Case - Empty Search
  33 |   test('search with no results', async () => {
  34 |     await webTable.searchUser('NoUser123');
  35 | 
  36 |     const rows = await webTable.tableRows.count();
  37 |     expect(rows).toBe(0);
  38 |   });
  39 | 
  40 |   // ✅ Update Record
  41 |   test('should edit a user', async () => {
  42 |     await webTable.editFirstUser("UpdatedName");
  43 | 
  44 |     await webTable.searchUser("UpdatedName");
  45 | 
  46 |     await webTable.verifyUserPresent("UpdatedName");
  47 |   });
  48 | 
  49 |   // ✅ Delete Record
  50 |   test('should delete a user', async () => {
  51 |     await webTable.deleteUser();
  52 | 
  53 |     // Validation (no specific user)
> 54 |     await expect(webTable.tableRows.first()).not.toContainText("John");
     |                                                  ^ Error: expect(locator).not.toContainText(expected) failed
  55 |   });
  56 | 
  57 | });
  58 | 
```