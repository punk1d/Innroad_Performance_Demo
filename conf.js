/* eslint-disable no-undef */
//var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter/index');

var reporter = new HtmlScreenshotReporter({
  dest: 'C:/TestResults',
  filename: 'Innroad-Performance-report.html'
});

exports.config = {
    seleniumAddress: "http://localhost:4444/wd/hub",
    specs: ['./Tests/InnroadLoginTest.js'],

    //directConnect: true,
    capabilities: {
    'shardTestFiles': true,
    'maxInstances': 1,
    browserName:'chrome',
    //Enable below lines to use Chrome in headless mode
      // chromeOptions: {
      //    args: ['--headless', '--disable-gpu', '--window-size=800,600']
      // }
  },

    //Allows to open multiple browser instances. If MultiCapabilities is set
     //Capabilities settings will be ignored 
    //
    // multiCapabilities: [{
    //   'browserName': 'firefox'
     // }, 
    // {
    //   'browserName': 'chrome'
    // }],

    params: {
        Login: {
            userCode: 'innroad',
            user: 'crodriguez',
            password: 'Pino$123'
        }
    },

    framework: 'jasmine2',

    // Setup the report before any tests start
    beforeLaunch: function() {
        return new Promise(function(resolve){
        reporter.beforeLaunch(resolve);
        });
    },

  
    onPrepare: function(){
    // Assign the test reporter to each running instance
    jasmine.getEnv().addReporter(reporter);


    global.isAngularSite = function(flag) {
        browser.ignoreSynchronization = !flag;
    };

    // Module to disable angular animations
    var disableNgAnimate = function() {
      angular
              .module('disableNgAnimate', [])
              .run(['$animate', function($animate) {
                $animate.enabled(false);
                }]);
        };

        // Module to disable css animations
    var disableCssAnimate = function() {
      angular
          .module('disableCssAnimate', [])
          .run(function() {
            var style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = '* {' +
                '-webkit-transition: none !important;' +
                '-moz-transition: none !important' +
                '-o-transition: none !important' +
                '-ms-transition: none !important' +
                'transition: none !important' +
                '}';
                document.getElementsByTagName('head')[0].appendChild(style);
            });
    };

    // Adds both disable animations modules
    browser.addMockModule('disablegAnimate', disableNgAnimate);
    browser.addMockModule('disableCssAnimate', disableCssAnimate);

    // Global driver for non angular elements
    // Test usage: dvr.findElement(by.css('[data-ptor="submit-btn"]'));
    global.dvr = browser.driver;

    // Set the browser windows size
    dvr.get('https://training.innroad.com/login.html');
    dvr.manage().window().setSize(1080, 774);
    dvr.manage().window().setPosition(1, 1);
    },

  // Close the report after all tests finish
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }
     
}