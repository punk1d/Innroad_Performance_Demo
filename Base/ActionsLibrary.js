/* eslint-disable no-undef */
/* eslint-disable max-lines-per-function */
var Methods = require('../Base/MethodLibrary.js');
var EC = protractor.ExpectedConditions;
var ActionsLibrary = function() {

    this.sendText = function (element, text) {
      browser.ignoreSynchronization = true;
      browser.wait(EC.visibilityOf(element), 30000);
      //Methods.waitForElementToBePresent(element);
      element.sendKeys(text);
      //browser.waitForAngular();
    };

    this.elementDisplayed = function (element) {
      browser.wait(EC.visibilityOf(element), 30000);
      Methods.waitForElementToBePresent(element);
      
return element.isDisplayed();
    };

    this.elementIsNotDisplayed = function (element){
      return browser.isElementPresent(element);
    };

    this.elementPresent = function (element) {
      browser.wait(EC.visibilityOf(element), 30000);
      Methods.waitForElementToBePresent(element);
      
return element.isPresent();
    }

    this.clearContent = function (element) {
      browser.wait(EC.visibilityOf(element), 30000);
      Methods.waitForElementToBePresent(element);
      
return element.clear();
    }

    this.clickElement = function (element) {
      //browser.ignoreSynchronization = true;
      browser.wait(EC.visibilityOf(element), 30000);
      Methods.waitForElementToBePresent(element);
      element.click();
      //browser.waitForAngular();
      //browser.sleep(4000);
    };

    this.submitElement = function (element){
      browser.ignoreSynchronization = true;
      browser.wait(EC.visibilityOf(element), 30000);
      Methods.waitForElementToBePresent(element);
      element.submit();
    };

    this.hoverElement = function(element){
      browser.wait(EC.visibilityOf(element), 30000);
      Methods.waitForElementToBePresent(element);
      browser.actions().mouseMove(element).perform();
    };

    this.waitForPageToLoad = function() {
      //browser.ignoreSynchronization = true;
      //browser.sleep(6000);
      browser.waitForAngular();
      browser.sleep(6000);
    };

  // this.matchListElementText = function(listElements, listName) {
  // var items = listElements.filter(function(item) {
  // return item.getText().then(function(label) {
  // return label === listName;
  // });
  // });
  // return expect(items.count()).toBe(1)
  // };

};

module.exports = new ActionsLibrary();
