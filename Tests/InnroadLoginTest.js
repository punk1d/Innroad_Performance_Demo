var loginPage = require ('../PageObjectsFactory/LoginPage.js');
var EC = protractor.ExpectedConditions;

describe("User logs into Innroad app", function() {
    it("Opens Login page and enter valid credentials", function(){
        loginPage.logIn(browser.params.Login.userCode, browser.params.Login.user, browser.params.Login.password);
        browser.wait(EC.urlIs("https://training.innroad.com/login.html"), 5000);    
        expect(browser.getCurrentUrl()).toEqual('https://training.innroad.com/login.html');  
    });
});