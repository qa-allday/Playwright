const { expect } = require('@playwright/test');
const { test } = require('../fixtures/fixtures');
const { generateNewUserData } = require('../utils/testData');
const { tester } = require('../data/users');

test.beforeEach(async ({ page, homePage }) => {
  await page.goto('/')
  await homePage.signupLoginMenuicon.click();
});

test('Register New User', async ({ page, homePage, signUpLoginPage  }) => {
  const user = generateNewUserData();

  await expect(signUpLoginPage.signupName).toBeVisible();

  await signUpLoginPage.startRegistration(user);

  await expect(signUpLoginPage.signup2Name).toHaveValue(user.name);

  await expect(signUpLoginPage.signup2Email).toHaveValue(user.email);

  await signUpLoginPage.fillInRegistrationForm(user);

  await signUpLoginPage.signup2CreateAccountBtn.click();

  await expect(page.getByText('ACCOUNT CREATED!')).toBeVisible();

  await expect(signUpLoginPage.signup2ContinueBtn).toBeVisible();

  await signUpLoginPage.signup2ContinueBtn.click();

  await expect(homePage.logoutMenuicon).toBeVisible();

  await expect(homePage.deleteAccountMenuicon).toBeVisible();

  await expect(homePage.signupLoginMenuicon).not.toBeVisible();

  await homePage.deleteAccountMenuicon.click();

  await expect(page.getByText('ACCOUNT DELETED!')).toBeVisible();

  await expect(signUpLoginPage.signup2ContinueBtn).toBeVisible();

  await signUpLoginPage.signup2ContinueBtn.click();

  await expect(homePage.signupLoginMenuicon).toBeVisible();

  });

test('Login with Valid Credentials and Logout', async ({ page, homePage, signUpLoginPage  }) => {
  await signUpLoginPage.loginToApplication(tester.email, tester.password);

  await expect(homePage.deleteAccountMenuicon).toBeVisible();

  await homePage.logoutMenuicon.click();

  await expect(page).toHaveURL(/.*login/);

  await expect(homePage.signupLoginMenuicon).toBeVisible();

  await expect(signUpLoginPage.loginEmail).toBeVisible();
  
  });