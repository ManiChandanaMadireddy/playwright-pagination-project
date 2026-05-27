
const { expect } = require('@playwright/test');

class WebTablesPage {
  constructor(page) {
    this.page = page;

    // ✅ Stable selectors (prefer IDs / placeholders / roles)
    this.addBtn = page.locator('#addNewRecordButton');
    this.searchBox = page.locator('#searchBox');

    this.firstName = page.locator('#firstName');
    this.lastName = page.locator('#lastName');
    this.email = page.locator('#userEmail');
    this.age = page.locator('#age');
    this.salary = page.locator('#salary');
    this.department = page.locator('#department');

    this.submitBtn = page.locator('#submit');
    this.tableRows = page.locator('.rt-tbody .rt-tr-group');
  }

  async navigate() {
    await this.page.goto('/webtables');
  }

  // ✅ Create Record
  async addUser(user) {
    await this.addBtn.click();

    await this.firstName.fill(user.firstName);
    await this.lastName.fill(user.lastName);
    await this.email.fill(user.email);
    await this.age.fill(user.age);
    await this.salary.fill(user.salary);
    await this.department.fill(user.department);

    await this.submitBtn.click();
  }

  // ✅ Search record
  async searchUser(name) {
    await this.searchBox.fill(name);
  }

  // ✅ Validate record exists
  async verifyUserPresent(name) {
    await expect(this.page.locator('table')).toContainText(name);
  }

  // ✅ Delete record
  async deleteUser() {
    // Deletes first row (demo purpose)
    await this.page.locator('[title="Delete"]').first().click();
  }

  // ✅ Update record (Edit first row)
  async editFirstUser(newName) {
    await this.page.locator('[title="Edit"]').first().click();

    await this.firstName.fill(newName);
    await this.submitBtn.click();
  }
  
}
module.exports = { WebTablesPage };
