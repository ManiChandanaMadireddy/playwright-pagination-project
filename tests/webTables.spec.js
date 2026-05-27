

const { test, expect } = require('../fixtures/webTableFixture');
const testData = require('../utils/testData');

test.describe('DemoQA Web Tables - CRUD + Validation', () => {
  // ✅ Positive Test - Add User
  test('should add a new user successfully', async ({webTable }) => {
    await webTable.addUser(testData.user1);

    await webTable.searchUser(testData.user1.firstName);

    await webTable.verifyUserPresent(testData.user1.firstName);
  });

  // ✅ Negative Test - Invalid Data
  test('should not submit with invalid data', async ({ page,webTable  }) => {
    await webTable.addUser(testData.invalidUser);

    // Expect modal still open (validation failed)
    await expect(page.locator('#submit')).toBeVisible();
  });

  
// ✅ Edge Case - Empty Search
test('search with no results', async ({webTable }) => {
  await webTable.searchUser('NoUser123');

  const rows = await webTable.tableRows.count();
  expect(rows).toBe(0);
  });


  // ✅ Update Record
  test('should edit a user', async ({webTable }) => {
    await webTable.editFirstUser("UpdatedName");

    await webTable.searchUser("UpdatedName");

    await webTable.verifyUserPresent("UpdatedName");
  });

  // ✅ Delete Record
  
test('Delete user and validate removal', async ({webTable }) => {

  // ✅ Add user (if needed)
  await webTable.addUser(testData.user1);

  // ✅ Delete user
  await webTable.deleteUser();

  // ✅ ✅ ADD VALIDATION HERE
  const rowCount = await webTable.tableRows.count();

  if (rowCount === 0) {
    console.log("✅ No rows present → User successfully deleted");
    await expect(rowCount).toBe(0);
  } else {
    console.log(`✅ Rows present: ${rowCount} → Validating 'John' not present`);
    await expect(webTable.tableRows).not.toContainText("John");
  }

});


});
