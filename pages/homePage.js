class HomePage
{

    constructor(page)
    {
        this.page=page;
        this.homeMenuicon= page.locator("//*[contains(@class,'navbar')]//*[contains(text(),'Home')]");
        this.productsMenuicon= page.locator("//*[contains(@class,'navbar')]//*[contains(text(),'Products')]");
        this.cartMenuicon= page.locator("//*[contains(@class,'navbar')]//*[contains(text(),'Cart')]");
        this.signupLoginMenuicon= page.locator("//*[contains(@class,'navbar')]//*[contains(text(),'Signup')]");
        this.testcasesMenuicon= page.locator("//*[contains(@class,'navbar')]//*[contains(text(),'Test Cases')]");
        this.apitestingMenuicon= page.locator("//*[contains(@class,'navbar')]//*[contains(text(),'API Testing')]");
        this.videoTutorialsMenuicon= page.locator("//*[contains(@class,'navbar')]//*[contains(text(),'Video T')]");
        this.contactUsMenuicon= page.locator("//*[contains(@class,'navbar')]//*[contains(text(),'Contact Us')]");
        this.logoutMenuicon= page.locator("//*[contains(@class,'navbar')]//*[contains(text(),'Logout')]");
        this.deleteAccountMenuicon= page.locator("//*[contains(@class,'navbar')]//*[contains(text(),'Delete Account')]");
    }
}

module.exports=HomePage;