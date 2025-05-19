const { expect } = require('@playwright/test');
const { test } = require('../fixtures/fixtures');

test.beforeEach(async ({ page, homePage }) => {
    await page.goto('/');
    await homePage.productsMenuicon.click();
  });

test('Search Product', async ({ page, productsPage  }) => {

  await expect(page.getByText('ALL PRODUCTS')).toBeVisible();

  await productsPage.searchProduct("blue");

  await expect(page.getByText('SEARCHED PRODUCTS')).toBeVisible();

  await productsPage.verifySearchProducts("blue",7);

  });

test('Add Products To Cart', async ({ page, productsPage, homePage, cartPage  }) => {

  const products = [
    { name: 'Blue Top', count: 3, price: 500 },
    { name: 'Blue Slim Fit Jeans', count: 1, price: 1400 },
  ];

  await productsPage.searchProduct("blue");

  await productsPage.addProductsToCart(products);

  await homePage.cartMenuicon.click();

  await cartPage.verifyProductRows(products);

  });