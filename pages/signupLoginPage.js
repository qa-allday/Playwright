class SignUpLoginPage
{
    constructor(page)
    {
        this.page = page;
        /* Initial page elements*/
        this.loginEmail= page.locator("[data-qa=login-email]");
        this.loginPassword= page.locator("[data-qa=login-password]");
        this.loginButton= page.locator("[data-qa=login-button]");
        this.signupName= page.locator("[data-qa=signup-name]");
        this.signupEmail= page.locator("[data-qa=signup-email]");
        this.signupButton= page.locator("[data-qa=signup-button]");
        /* Signup Step#2 page elements*/
        this.signup2Name= page.locator("[data-qa=name]");
        this.signup2Email= page.locator("[data-qa=email]");
        this.signup2Password= page.locator("#password");

        this.signup2FirstName= page.locator("#first_name");
        this.signup2LastName= page.locator("#last_name");
        this.signup2Address1= page.locator("#address1");
        this.signup2Country= page.locator("#country");
        this.signup2State= page.locator("#state");
        this.signup2City= page.locator("#city");
        this.signup2Zipcode= page.locator("#zipcode");
        this.signup2MobileNum= page.locator("#mobile_number");
        this.signup2CreateAccountBtn= page.locator("[data-qa=create-account]");

        /* Signup Final page elements*/
        this.signup2ContinueBtn= page.locator("[data-qa=continue-button]");
    }

    async loginToApplication(email, password)
    {
        await this.loginEmail.fill(email);
        await this.loginPassword.fill(password);
        await this.loginButton.click();
    }

    async registerNewUser(name, email)
    {
        await this.signupName.fill(name);
        await this.signupEmail.fill(email);
        await this.signupButton.click();
    }

    async startRegistration(user)
    {
        await this.signupName.fill(user.name);
        await this.signupEmail.fill(user.email);
        await this.signupButton.click();
    }

    async fillInRegistrationForm(user)
    {
        await this.signup2Password.fill(user.password);
        await this.signup2FirstName.fill(user.firstName);
        await this.signup2LastName.fill(user.lastName);
        await this.signup2Address1.fill(user.address1);
        await this.signup2Country.selectOption(user.country);
        await this.signup2State.fill(user.state);
        await this.signup2City.fill(user.city);
        await this.signup2Zipcode.fill(user.zipcode);
        await this.signup2MobileNum.fill(user.mobile);
    }

}

module.exports=SignUpLoginPage;