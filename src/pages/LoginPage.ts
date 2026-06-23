
import {Locator, Page, } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  //private locators: class vars
  private readonly emailId: Locator;
  private readonly password: Locator;
  private readonly submitbtn: Locator;

  private readonly forgotpwdlink: Locator;
  private readonly logo:Locator;

  private readonly errormesge: Locator;

  private readonly registerUserLink: Locator;


  //class construc...to initialize the class vars + inherit parent construc...
  constructor(page:Page){
    super(page);
    this.emailId = page.getByRole('textbox', { name: 'E-Mail Address' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.submitbtn = page.getByRole('button', { name: 'Login' });

    this.forgotpwdlink = page.getByRole('link', { name: 'Forgotten Password' }).first();
    this.logo = page.getByRole('img', { name: 'naveenopencart' });

    this.errormesge = page.locator('div.alert.alert-danger.alert-dismissible');

    this.registerUserLink = page.getByRole('link', { name: 'Register' });
  }

  //public page actions/behaviour:
  async goToLoginPage():Promise<void>{
    await this.page.goto('opencart/index.php?route=account/login');
  }

  async getLoginPageTitle():Promise<string>{
    return await this.page.title();
  }

  async isForgotPwdLinkExist():Promise<boolean>{
    return await this.forgotpwdlink.isVisible();
  }

  async isLogoExist():Promise<boolean>{
    return await this.logo.isVisible();
  }

  async doLogin(username:string, password:string){
    console.log(`user credentials: ${username}-${password}`);

    await this.emailId.fill(username);
    await this.password.fill(password);
    await this.submitbtn.click();
  }

  async isInvalidLoginMesgeDisplayed():Promise<boolean>{
    return await this.errormesge.isVisible();
  }

  async navigateToRegistrationPage(){
    return await this.registerUserLink.click();
  }


}