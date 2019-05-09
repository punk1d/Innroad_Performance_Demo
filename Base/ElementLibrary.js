/*
This module handles selenium locators to be used on Page Objects Factory
*/

var ElementLibrary = function(){

    //Locates a series of elements by CSS Class
    this.all = function(selector){
      return element.all(by.css(selector));
    }

    //Locates element by the given Class name
    this.class = function(selector){
      return element(by.className(selector));
    };

    //Locates element by the given CSS selector
    this.css = function(selector){
      return element(by.css(selector));
    };

    //Locates element by href
    this.href = function(href){
      return element(by.css(href));
    };

    //Locates element by the given id
    this.id = function(id){
      return element(by.id(id));
    };

    //Locates element by the given Link Text
    this.linkText = function(linkText){
      return element(by.linkText(linkText));
    };

    //Locates element by the given repeater name
    this.repeater = function(repeater){
      return element(by.repeater(repeater));
    };

    //Locates element by the given css selector and text given
    this.cssContainsText = function(selector, text){
      return element(by.cssContainingText(selector, text));
    };

    //Locates element by the given model
    this.model = function(model){
      return element(by.model(model));
    };

    //Locates element by the given buttonText
    this.buttonText = function(buttonText){
      return element(by.buttonText(buttonText));
    };

    this.xpath = function(xpath){
      return element(by.xpath(xpath));
    };

    this.elementList = function(parentElement){
      return element.all(by.css('parentElement'));
    };

};

module.exports = new ElementLibrary();
