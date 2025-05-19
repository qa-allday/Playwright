const { expect } = require('@playwright/test');
const { test } = require('../fixtures/fixtures');
const { tester } = require('../data/users');
const { generateNewUserAPIData } = require('../utils/testData');

test('Get All Products List', async ({ api, fileUtils }) => {

    const response = await api.getProducts();

    const data = await response.json();
    expect(data.responseCode).toBe(200);
    expect(data.products.length).toBeGreaterThan(0);

    const res_json= await fileUtils.saveJsonWithTimestamp(data, 'products');
    expect(await fileUtils.compareJsonFiles('products.json',res_json)).toBe(true);

  });

test('Get User Account Detaisl By Email', async ({ api, fileUtils }) => {

    const response = await api.getUserDetailByEmail(tester.email);

    const data = await response.json();
    expect(data.responseCode).toBe(200);
    expect(Object.keys(data.user).length).toBeGreaterThan(0);

    const res_json= await fileUtils.saveJsonWithTimestamp(data, 'userByEmail');

  });

test('Create/Register User Account', async ({ api, fileUtils }) => {
    const user = generateNewUserAPIData();
    const response = await api.createUserAccount(user);

    const data = await response.json();
    expect(data.responseCode).toBe(201);
    expect(data.message).toBe('User created!');

    const res_json= await fileUtils.saveJsonWithTimestamp(data, 'createdUser');

  });

test('Verify Login with invalid details', async ({ api, fileUtils }) => {
    const response = await api.login('wrong@test.com','password');

    const data = await response.json();
    expect(data.responseCode).toBe(404);
    expect(data.message).toBe('User not found!');

  });

test.afterEach(async ({ fileUtils }) => {
    await fileUtils.deleteAllFilesInDir();
  });