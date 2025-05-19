const { test: base, request } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const SignUpLoginPage = require('../pages/signupLoginPage');
const ProductsPage = require('../pages/productsPage');
const CartPage = require('../pages/cartPage');
const FileUtils = require('../utils/fileUtils');
const ApiHelpers = require('../api/apiHelpers');

const test = base.extend({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  signUpLoginPage: async ({ page }, use) => {
    await use(new SignUpLoginPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  fileUtils: async ({}, use) => {
    await use(new FileUtils());
  },
  api: async ({}, use) => {
    const apiRequest = await request.newContext({
      baseURL: 'https://www.automationexercise.com/api/',
    //   extraHTTPHeaders: {
    //     Authorization: `Bearer TOKEN`,
    //   },
    });
    await use(new ApiHelpers(apiRequest));
    await apiRequest.dispose();
  }
});

module.exports = { test };