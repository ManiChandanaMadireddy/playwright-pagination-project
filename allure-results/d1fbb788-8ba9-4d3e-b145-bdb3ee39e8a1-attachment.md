# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pagination.spec.js >> 📄 Pagination Validation Suite >> ✅ Validate rows exist in pagination table
- Location: tests\pagination.spec.js:9:8

# Error details

```
ReferenceError: document is not defined
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
      - img [ref=e5]
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]:
        - generic [ref=e14] [cursor=pointer]:
          - generic [ref=e15]:
            - img [ref=e17]
            - text: Elements
          - img [ref=e22]
        - list [ref=e25]:
          - listitem [ref=e26] [cursor=pointer]:
            - link "Text Box" [ref=e27]:
              - /url: /text-box
              - img [ref=e28]
              - text: Text Box
          - listitem [ref=e30] [cursor=pointer]:
            - link "Check Box" [ref=e31]:
              - /url: /checkbox
              - img [ref=e32]
              - text: Check Box
          - listitem [ref=e34] [cursor=pointer]:
            - link "Radio Button" [ref=e35]:
              - /url: /radio-button
              - img [ref=e36]
              - text: Radio Button
          - listitem [ref=e38] [cursor=pointer]:
            - link "Web Tables" [ref=e39]:
              - /url: /webtables
              - img [ref=e40]
              - text: Web Tables
          - listitem [ref=e42] [cursor=pointer]:
            - link "Buttons" [ref=e43]:
              - /url: /buttons
              - img [ref=e44]
              - text: Buttons
          - listitem [ref=e46] [cursor=pointer]:
            - link "Links" [ref=e47]:
              - /url: /links
              - img [ref=e48]
              - text: Links
          - listitem [ref=e50] [cursor=pointer]:
            - link "Broken Links - Images" [ref=e51]:
              - /url: /broken
              - img [ref=e52]
              - text: Broken Links - Images
          - listitem [ref=e54] [cursor=pointer]:
            - link "Upload and Download" [ref=e55]:
              - /url: /upload-download
              - img [ref=e56]
              - text: Upload and Download
          - listitem [ref=e58] [cursor=pointer]:
            - link "Dynamic Properties" [ref=e59]:
              - /url: /dynamic-properties
              - img [ref=e60]
              - text: Dynamic Properties
      - generic [ref=e64] [cursor=pointer]:
        - generic [ref=e65]:
          - img [ref=e67]
          - text: Forms
        - img [ref=e73]
      - generic [ref=e77] [cursor=pointer]:
        - generic [ref=e78]:
          - img [ref=e80]
          - text: Alerts, Frame & Windows
        - img [ref=e85]
      - generic [ref=e89] [cursor=pointer]:
        - generic [ref=e90]:
          - img [ref=e92]
          - text: Widgets
        - img [ref=e98]
      - generic [ref=e102] [cursor=pointer]:
        - generic [ref=e103]:
          - img [ref=e105]
          - text: Interactions
        - img [ref=e110]
      - generic [ref=e114] [cursor=pointer]:
        - generic [ref=e115]:
          - img [ref=e117]
          - text: Book Store Application
        - img [ref=e122]
    - generic [ref=e125]:
      - heading "Web Tables" [level=1] [ref=e128]
      - generic [ref=e129]:
        - generic [ref=e130]:
          - button "Add" [ref=e132] [cursor=pointer]
          - generic [ref=e134]:
            - textbox "Type to search" [ref=e135]
            - button [ref=e136] [cursor=pointer]:
              - img [ref=e137]
        - table [ref=e139]:
          - rowgroup [ref=e140]:
            - row "First Name Last Name Age Email Salary Department Action" [ref=e141]:
              - columnheader "First Name" [ref=e142]
              - columnheader "Last Name" [ref=e143]
              - columnheader "Age" [ref=e144]
              - columnheader "Email" [ref=e145]
              - columnheader "Salary" [ref=e146]
              - columnheader "Department" [ref=e147]
              - columnheader "Action" [ref=e148]
          - rowgroup [ref=e149]:
            - row "Cierra Vega 39 cierra@example.com 10000 Insurance EditDelete" [ref=e150]:
              - cell "Cierra" [ref=e151]
              - cell "Vega" [ref=e152]
              - cell "39" [ref=e153]
              - cell "cierra@example.com" [ref=e154]
              - cell "10000" [ref=e155]
              - cell "Insurance" [ref=e156]
              - cell "EditDelete" [ref=e157]:
                - generic [ref=e158]:
                  - generic "Edit" [ref=e159] [cursor=pointer]:
                    - img [ref=e160]
                  - generic "Delete" [ref=e162] [cursor=pointer]:
                    - img [ref=e163]
            - row "Alden Cantrell 45 alden@example.com 12000 Compliance EditDelete" [ref=e165]:
              - cell "Alden" [ref=e166]
              - cell "Cantrell" [ref=e167]
              - cell "45" [ref=e168]
              - cell "alden@example.com" [ref=e169]
              - cell "12000" [ref=e170]
              - cell "Compliance" [ref=e171]
              - cell "EditDelete" [ref=e172]:
                - generic [ref=e173]:
                  - generic "Edit" [ref=e174] [cursor=pointer]:
                    - img [ref=e175]
                  - generic "Delete" [ref=e177] [cursor=pointer]:
                    - img [ref=e178]
            - row "Kierra Gentry 29 kierra@example.com 2000 Legal EditDelete" [ref=e180]:
              - cell "Kierra" [ref=e181]
              - cell "Gentry" [ref=e182]
              - cell "29" [ref=e183]
              - cell "kierra@example.com" [ref=e184]
              - cell "2000" [ref=e185]
              - cell "Legal" [ref=e186]
              - cell "EditDelete" [ref=e187]:
                - generic [ref=e188]:
                  - generic "Edit" [ref=e189] [cursor=pointer]:
                    - img [ref=e190]
                  - generic "Delete" [ref=e192] [cursor=pointer]:
                    - img [ref=e193]
        - generic [ref=e196]:
          - group [ref=e198]:
            - button "First" [disabled]
            - button "Previous" [disabled]
            - button "Next" [disabled]
            - button "Last" [disabled]
          - generic [ref=e199]:
            - text: Page
            - strong [ref=e200]: 1 of 1
          - combobox [ref=e202]:
            - option "Show 10" [selected]
            - option "Show 20"
            - option "Show 30"
            - option "Show 40"
            - option "Show 50"
  - contentinfo [ref=e209]:
    - generic [ref=e210]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | 
  2  | // tests/pagination.spec.js
  3  | 
  4  | const { test, expect } = require('../fixtures/paginationFixture');
  5  | 
  6  | test.describe('📄 Pagination Validation Suite', () => {
  7  | 
  8  |   // ✅ Positive Scenario
  9  |   test.only('✅ Validate rows exist in pagination table', async ({ paginationPage }) => {
  10 | 
  11 |   
> 12 | const table = document.querySelector("table");
     |               ^ ReferenceError: document is not defined
  13 | const rowCount = table.rows.length;
  14 |  
  15 | console.log(rowCount);
  16 | 
  17 |     //const rowCount = await paginationPage.getRowCount();
  18 |     console.log(`✅ Total Rows in current page: ${rowCount}`);
  19 | 
  20 |     expect(rowCount).toBeGreaterThan(0);
  21 | 
  22 |   });
  23 | 
  24 | 
  25 |   // ✅ Positive - Pagination total rows
  26 |   test('✅ Validate total rows across pages', async ({ paginationPage }) => {
  27 | 
  28 |     const totalRows = await paginationPage.getAllRowsAcrossPages();
  29 | 
  30 |     console.log("Total Rows:", totalRows);
  31 | 
  32 |     expect(totalRows).toBeGreaterThan(0);
  33 |   });
  34 | 
  35 | 
  36 |   // ✅ Positive - Dropdown validation
  37 |   test('✅ Validate rows per page selection', async ({ paginationPage }) => {
  38 | 
  39 |     await paginationPage.selectPageSize(10);
  40 | 
  41 |     const totalPages = await paginationPage.getTotalPages();
  42 | 
  43 |     const rows = await paginationPage.getRowCount();
  44 | 
  45 |     if (totalPages === 1) {
  46 |       console.log(`✅ Single page → Rows: ${rows}`);
  47 |       expect(rows).toBeLessThanOrEqual(10);
  48 |     } else {
  49 |       console.log("✅ Multiple pages → verifying 10 rows per page");
  50 |       expect(rows).toBe(10);
  51 |     }
  52 |   });
  53 | 
  54 | 
  55 |   // ❌ Negative Scenario
  56 |   test('❌ Search with invalid data should show zero rows', async ({ paginationPage }) => {
  57 | 
  58 |     await paginationPage.searchUser('InvalidUser123');
  59 | 
  60 |     const rows = await paginationPage.getRowCount();
  61 | 
  62 |     expect(rows).toBe(0);
  63 |   });
  64 | 
  65 | 
  66 |   // ⚠️ Edge Case - Single Page Handling
  67 |   test('⚠️ Handle single page scenario gracefully', async ({ paginationPage }) => {
  68 | 
  69 |     const totalPages = await paginationPage.getTotalPages();
  70 | 
  71 |     if (totalPages === 1) {
  72 |       const rows = await paginationPage.getRowCount();
  73 | 
  74 |       console.log(`⚠️ Only 1 page → Rows: ${rows}`);
  75 | 
  76 |       expect(rows).toBeGreaterThanOrEqual(0);
  77 |     }
  78 |   });
  79 | 
  80 | 
  81 |   // ⚠️ Edge Case - Empty Search Reset
  82 |   test('⚠️ Clearing search should restore data', async ({ paginationPage }) => {
  83 | 
  84 |     await paginationPage.searchUser('Cierra');
  85 |     await paginationPage.searchUser('');
  86 | 
  87 |     const rows = await paginationPage.getRowCount();
  88 | 
  89 |     expect(rows).toBeGreaterThan(0);
  90 |   });
  91 | 
  92 | });
  93 | 
```