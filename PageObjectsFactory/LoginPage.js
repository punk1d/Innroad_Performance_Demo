var WebElements = require('../Base/ElementLibrary.js');
var Actions = require('../Base/ActionsLibrary.js');

var LoginPage = function(){

  var userCode = WebElements.id('txtclientCode');
  var userName = WebElements.id('txtLoginID');
  var password = WebElements.id('txtUserPassword');
  var loginButton = WebElements.id('btnLogon');

  //Function to Log In
  this.logIn = function(code, userLogin, userPassword){
      Actions.sendText(userCode, code);
      Actions.sendText(userName, userLogin);
      Actions.sendText(password,userPassword);
      Actions.clickElement(loginButton);
  };

};

module.exports = new LoginPage();
