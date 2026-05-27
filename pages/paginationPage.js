
class PaginationPage {
  constructor(page) {
    this.page = page;

    // ✅ Table rows (React table rows)
    this.rows = page.locator('.rt-tbody .rt-tr-group');

    // ✅ Search input
    this.searchBox = page.locator('#searchBox');

    
  }

  // ✅ Navigate to URL
  async navigate() {
    await this.page.goto('https://demoqa.com/webtables');

    // wait till page fully loads
    await this.page.waitForLoadState('networkidle');
  }

  // ✅ ✅ UPDATED CLEAN ROW COUNT LOGIC (your working code merged)
  async getRowCount() {
    const selectors = ['.rt-tbody .rt-tr-group', 'table tbody tr'];

    let renderedCount = 0;
    let usedSelector = null;

    // 🔁 Try both selectors (stable + fallback)
    for (const selector of selectors) {
      const loc = this.page.locator(selector);
      const total = await loc.count();

      console.log(`Checking selector "${selector}" → total: ${total}`);

      // ❌ skip if no elements
      if (total === 0) continue;

      usedSelector = selector;

      // ✅ count ONLY visible rows
      for (let i = 0; i < total; i++) {
        if (await loc.nth(i).isVisible()) {
          renderedCount++;
        }
      }

      break; // ✅ stop after first working selector
    }

    console.log('Used selector:', usedSelector);
    console.log('✅ Rendered Rows:', renderedCount);

    return renderedCount;
  }

  // ✅ Search user
  async searchUser(name) {
    await this.searchBox.fill(name);

    // small wait for React filtering
    await this.page.waitForTimeout(1000);
  }
}

module.exports = { PaginationPage };

