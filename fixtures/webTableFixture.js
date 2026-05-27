
const base = require('@playwright/test');
const { WebTablesPage } = require('../pages/webTablesPage');


// ✅ Extend Playwright test with custom fixture
exports.test = base.test.extend({

  webTable: async ({ page }, use) => {
    const webTable = new WebTablesPage(page);

    // ✅ Navigate once before each test
    await webTable.navigate();

    // ✅ Make webTable available in tests
    await use(webTable);
  }

});

// ✅ Re-export expect
exports.expect = base.expect;
