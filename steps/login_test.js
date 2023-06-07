const { I, login_page, home_page } = inject();

Feature("login");

Scenario("Login whith success", () => {
  login_page.dologin("teste@teste.com", "123456");
  home_page.loginVerified();
});

Scenario("Login whith error", () => {
  login_page.dologin("xteste@teste.com", "123456");
  login_page.loginError();
});
