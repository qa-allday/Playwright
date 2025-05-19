const { expect } = require('@playwright/test');

class CartPage
{

    constructor(page)
    {
        this.page=page;
    }

    async verifyProductRow(product)
    {
        await expect(this.page.locator(`//*[contains(text(),'${product.name}')]//ancestor::tr/*[@class='cart_price']`)).toContainText(`${product.price}`);
        await expect(this.page.locator(`//*[contains(text(),'${product.name}')]//ancestor::tr/*[@class='cart_quantity']`)).toContainText(`${product.count}`);
        const total= product.count * product.price;
        await expect(this.page.locator(`//*[contains(text(),'${product.name}')]//ancestor::tr/*[@class='cart_total']`)).toContainText(`${total}`);
    }

    async verifyProductRows(products)
    {
        for (const product of products) 
        {
            await this.verifyProductRow(product);
        }
    }

}

module.exports=CartPage;