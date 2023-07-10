class ProductPage {
  constructor(page) {
    this.page = page;
    this.products_label = page.locator('[class="title"]');
  }
}

module.exports = ProductPage;