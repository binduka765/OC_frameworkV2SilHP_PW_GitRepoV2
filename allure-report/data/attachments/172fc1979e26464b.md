# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginpage.spec.ts >> tc3: forgot pwd link exist test
- Location: tests\loginpage.spec.ts:26:1

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "opencart/index.php?route=account/login", waiting until "load"

```

# Test source

```ts
  1  | 
  2  | import {Locator, Page, } from '@playwright/test';
  3  | import { BasePage } from './BasePage';
  4  | 
  5  | export class LoginPage extends BasePage {
  6  | 
  7  |   //private locators: class vars
  8  |   private readonly emailId: Locator;
  9  |   private readonly password: Locator;
  10 |   private readonly submitbtn: Locator;
  11 | 
  12 |   private readonly forgotpwdlink: Locator;
  13 |   private readonly logo:Locator;
  14 | 
  15 | 
  16 |   //class construc...to initialize the class vars + inherit parent construc...
  17 |   constructor(page:Page){
  18 |     super(page);
  19 |     this.emailId = page.getByRole('textbox', { name: 'E-Mail Address' });
  20 |     this.password = page.getByRole('textbox', { name: 'Password' });
  21 |     this.submitbtn = page.getByRole('button', { name: 'Login' });
  22 | 
  23 |     this.forgotpwdlink = page.getByRole('link', { name: 'Forgotten Password' }).first();
  24 |     this.logo = page.getByRole('img', { name: 'naveenopencart' });
  25 |   }
  26 | 
  27 |   //public page actions/behaviour:
  28 |   async goToLoginPage():Promise<void>{
> 29 |     await this.page.goto('opencart/index.php?route=account/login');
     |                     ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  30 |   }
  31 | 
  32 |   async getLoginPageTitle():Promise<string>{
  33 |     return await this.page.title();
  34 |   }
  35 | 
  36 |   async isForgotPwdLinkExist():Promise<boolean>{
  37 |     return await this.forgotpwdlink.isVisible();
  38 |   }
  39 | 
  40 |   async isLogoExist():Promise<boolean>{
  41 |     return await this.logo.isVisible();
  42 |   }
  43 | 
  44 |   async doLogin(username:string, password:string){
  45 |     console.log(`user credentials: ${username}-${password}`);
  46 | 
  47 |     await this.emailId.fill(username);
  48 |     await this.password.fill(password);
  49 |     await this.submitbtn.click();
  50 |   }
  51 | 
  52 | 
  53 | 
  54 | }
```