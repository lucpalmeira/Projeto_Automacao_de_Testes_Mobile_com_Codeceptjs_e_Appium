const { I } = inject();

module.exports = {
  message: {
    waitCode: "~codigo",
    seeCode: "~codigo",
  },

  loginVerified() {
    I.waitForElement(this.message.waitCode, 5);
    I.seeElement(this.message.seeCode);
  },
};
