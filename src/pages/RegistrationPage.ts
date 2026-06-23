import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class RegistrationPage extends BasePage {
  //private page class vars:
  private readonly fName: Locator;
  private readonly lName: Locator;
  private readonly eMail: Locator;
  private readonly telPh: Locator;
  private readonly passWd: Locator;
  private readonly passConfirm: Locator;

  private readonly subscribeY: Locator;
  private readonly subscribeN: Locator;

  private readonly privPolicy: Locator;
  private readonly continueBtn: Locator;

  private readonly regSuccessMesge: Locator;

  private readonly loginLink: Locator;
  private readonly forgotPwdLink: Locator;

  //public construct...to initialize class vars + call the parent class construct...
  constructor(page: Page) {
    super(page);
    this.fName = page.getByRole("textbox", { name: "First Name" });
    this.lName = page.getByRole("textbox", { name: "Last Name" });
    this.eMail = page.getByRole("textbox", { name: "E-Mail" });
    this.telPh = page.getByRole("textbox", { name: "Telephone" });
    this.passWd = page.locator("input[type='password']").first();
    this.passConfirm = page.locator("#input-confirm");

    this.subscribeY = page.locator("input[name='newsletter'][value='1']");

    this.subscribeN = page.locator("input[name='newsletter'][value='0']");

    this.privPolicy = page.locator('[name="agree"]');
    this.continueBtn = page.getByRole("button", { name: "Continue" });

    this.regSuccessMesge = page.getByRole("heading", {
      name: "Your Account Has Been Created!",
      level: 1,
    });

    //imp page Links:
    this.loginLink = page.getByRole("link", { name: "Login" });
    this.forgotPwdLink = page.getByRole("link", { name: "Forgotten Password" });
  }

  //public page Actions/behaviour:
  async getRegPageTitle(): Promise<string> {
    return await this.page.title();
  }

  async isLoginLinkExist(): Promise<boolean> {
    return await this.loginLink.isVisible();
  }

  async isForgotPwdLinkOnRegPageExist() {
    return await this.forgotPwdLink.isVisible();
  }

  async registerUser(
    fn: string,
    ln: string,
    email: string,
    tel: string,
    pwd: string,
    subscribe: string,
  ): Promise<boolean> {
    await this.fName.fill(""); //clear the field
    await this.fName.fill(fn);
    await this.lName.fill("");
    await this.lName.fill(ln);
    await this.eMail.fill("");
    await this.eMail.fill(email);
    await this.telPh.fill("");
    console.log("Telephone:", tel);
    await this.telPh.fill(tel);
    console.log("Telephone filled");
    //await this.page.pause();
    console.log("Password:", pwd);
    await this.passWd.fill(pwd);
    console.log("Password filled");
    //await this.page.pause();
    await this.passConfirm.fill(pwd);
    console.log("Confirm Password filled");

    if (subscribe === "yes") {
      await this.subscribeY.check();
    } else {
      await this.subscribeN.check();
    }

    await this.privPolicy.check();
    await this.continueBtn.click();

    await this.regSuccessMesge.isVisible();

    let str = await this.regSuccessMesge.innerText();

    if (str === "Your Account Has Been Created!") {
      console.log("Registration--SUCCESS");
      return true;
    } else {
      console.log("Registration--FAILURE");
      return false;
    }
  }
}
