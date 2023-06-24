class LoginPage {
  constructor(page) {
    this.page = page;
    this.username_textbox = page.getByLabel('txt-username');
    this.password_textbox = page.getByLabel('txt-password');
    // this.login_button = page.getByRole('button', { name: 'Login' });
    this.login_button = page.getByLabel('btn-login');
  }

  async gotoLoginPage() {
    await this.page.goto('https://katalon-demo-cura.herokuapp.com/');
  }

  async login(username, password) {
    await this.username_textbox.fill(username);
    await this.password_textbox.fill(password);
    await this.login_button.click();
  }
}

export default LoginPage;
