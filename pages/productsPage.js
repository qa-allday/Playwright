const { expect } = require('@playwright/test');

class ProductsPage
{

    constructor(page)
    {
        this.page=page;
        this.productSearchField= page.locator("#search_product");
        this.productsSearchBtn= page.locator("#submit_search");
        this.viewCartLink= page.locator("//*[contains(text(),'View Cart')]");
        this.continueShoppingBtn= page.locator("//button[contains(text(),'Continue Shopping')]");
    }

    async searchProduct(product)
    {
        await this.productSearchField.fill(product);
        await this.productsSearchBtn.click();
    }

    async verifySearchProducts(name, count=1)
    {
        const allCardsCount= await this.page.locator("//*[contains(@class,'productinfo')]").count();
        const labeledCardsCount= await this.page.locator(`//*[contains(@class,'productinfo')]//*[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), '${name}')]`).count();
        expect(allCardsCount).toBe(count);
        expect(labeledCardsCount).toBe(allCardsCount);
    }

    async addProductToCart(name,position=1)
    {
        await this.page.locator(`(//*[contains(text(),'${name}')]//ancestor::*[contains(@class,'product-image-wrapper')])[${position}]`).hover()
        await this.page.locator(`(//*[contains(@class,'overlay')]//*[contains(text(),'${name}')]/following-sibling::a)[${position}]`).hover()
        await this.page.locator(`(//*[contains(@class,'overlay')]//*[contains(text(),'${name}')]/following-sibling::a)[${position}]`).click()
        await expect(this.page.locator("//div[@class='modal-content']")).toContainText(/Added!/)
        await expect(this.page.locator("//div[@class='modal-content']")).toContainText(/Your product has been added to cart./)
        await expect(this.viewCartLink).toBeVisible()
        await expect(this.continueShoppingBtn).toBeVisible()
    }

    async addProductsToCart(products) 
    {
        for (const product of products) {
          for (let i = 1; i <= product.count; i++) {
            await this.addProductToCart(product.name);
            await this.continueShoppingBtn.click();
          }
        }
    }
}

module.exports=ProductsPage;