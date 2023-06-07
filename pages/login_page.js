const { I } = inject();

module.exports = {
  fields: {
    email: "~email",
    password: "~senha",
  },
  button: {
    enter: "~entrar",
  },
  messages: {
    element: "~email",
    waitError: "~lognFail",
    seeError: "~lognFail",
  },

  dologin(Email, Password) {
    I.waitForElement(this.messages.element, 5);
    I.fillField(this.fields.email, Email);
    I.fillField(this.fields.password, Password);
    I.tap(this.button.enter);
  },

  loginError() {
    I.waitForElement(this.messages.waitError, 5);
    I.seeElement(this.messages.seeError);
  },
};
