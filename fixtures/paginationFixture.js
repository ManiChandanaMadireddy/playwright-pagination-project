
// fixtures/paginationFixture.js

const base = require('@playwright/test');
const { PaginationPage } = require('../pages/paginationPage');

// ✅ Extend Playwright test with custom fixture
exports.test = base.test.extend({
  
  // ✅ Create a reusable paginationPage fixture
  paginationPage: async ({ page }, use) => {

    const paginationPage = new PaginationPage(page);

    // ✅ Navigate before each test automatically
    await paginationPage.navigate();

    // ✅ Use the fixture in test
    await use(paginationPage);

    // ✅ You can add cleanup here if needed later
  }
});


// ✅ Export expect also
exports.expect = base.expect;
``
