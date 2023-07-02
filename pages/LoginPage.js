class LoginPage {
  constructor(page) {
    this.page = page;
    this.username_textbox = page.getByLabel('user-name');
    this.password_textbox = page.getByLabel('password');
    this.login_button = page.getByLabel('login-button');
    // this.login_button = page.getByRole('button', { name: 'Login' });
  }

  async gotoLoginPage() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username, password) {
    await this.username_textbox.fill(username);
    await this.password_textbox.fill(password);
    await this.login_button.click();
  }
}

export default LoginPage;
