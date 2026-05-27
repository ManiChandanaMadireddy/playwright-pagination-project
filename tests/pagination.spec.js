
const { test, expect } = require('../fixtures/paginationFixture');

test.describe('📄 Pagination Validation Suite', () => {

  // ✅ Validate rows exist
  test('✅ Validate rows exist in pagination table', async ({ paginationPage }) => {

    const rowCount = await paginationPage.getRowCount();

    console.log(`✅ Rows on current page: ${rowCount}`);

    expect(rowCount).toBeGreaterThan(0);
  });

  // ❌ Negative test
  test('❌ Search invalid → 0 rows', async ({ paginationPage }) => {

    await paginationPage.searchUser('InvalidUser123');

    const rows = await paginationPage.getRowCount();

    console.log(`❌ Rows after invalid search: ${rows}`);

    expect(rows).toBe(0);
  });

    // ⚠️ Clear search restores data
  test('⚠️ Clear search restores rows', async ({ paginationPage }) => {

    await paginationPage.searchUser('Cierra');
    await paginationPage.searchUser('');

    const rows = await paginationPage.getRowCount();

    console.log(`✅ Rows after clearing search: ${rows}`);

    expect(rows).toBeGreaterThan(0);
  });

});
