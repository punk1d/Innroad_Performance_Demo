// eslint-disable-next-line max-lines-per-function
var MethodLibrary = function () {

    // /*
    // * Click specific item
    // * panelToScroll - is the css attribute that contain all the elements (optional)
    // * element - are all the elements displayed on the panel
    // * searchItem - is the specific item to search on element
    // * scroll pixels - the number of pixels that the scroll should go down (optional)
    // * */
    this.clickSpecificItem = function (panelToScroll,element, searchItem, scrollPixels) {
        element.each(function(element,index) {
            browser.executeScript("return $('"+panelToScroll+"').animate({scrollTop:"+scrollPixels*index+"},0);")
                .then(function () {
                    element.getText().then(function (text) {
                        if(searchItem.toLowerCase() == text.toLowerCase())
                        {
                            element.click();
                        }
                    });
                });
        });

    };

    /*
     * Check if specific item exists
     * panelToScroll - is the css attribute that contain all the elements (optional '')
     * element - are all the elements displayed on the panel
     * searchItem - is the specific item to search on element
     * scroll pixels - the number of pixels that the scroll should go down (optional '0')
     * */
    this.checkIfSpecificItemExists = function (panelToScroll,element, searchItem, scrollPixels) {
        return element.filter(function (element, index) {
            return browser.executeScript("return $('"+panelToScroll+"').animate({scrollTop:"+scrollPixels*index+"},0);")
                .then(function () {
                    return element.getText().then(function (text) {
                        return text.toLowerCase() === searchItem.toLowerCase();
                    });
                });
        }).then(function (filteredElement) {
            return filteredElement.length > 0;
        });
    };

    // Automatically scrolls into a web element view
    this.scrollIntoView = function (webElement) {
        browser.executeScript('arguments[0].scrollIntoView()', webElement);
    };

    // Wait for a element to disappear from the dom
    this.waitForElementToDisappear = function (element) {
        dvr.wait(function () {
            return element.isDisplayed().then(function (isDisplayed) {
                return !isDisplayed;
            });
        },30000);
    };

    // Wait for element to show up
    this.waitForElementToShowup = function (element) {
        dvr.wait(function () {
            return element.isDisplayed().then(function (isDisplayed) {
                return isDisplayed;
            })
        },30000);
    };

    // Wait for element to be present
    this.waitForElementToBePresent = function (element) {
        dvr.wait(function () {
            return element.isPresent().then(function (isPresent) {
                return isPresent;
            })
        },30000);
    };
};

module.exports = new MethodLibrary();
