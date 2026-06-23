import test, { expect } from "playwright/test";
import { LoginPage } from "../src/pages/LoginPage";
import { HomePage } from "../src/pages/HomePage";

let loginpage: LoginPage;
let homepage: HomePage;

test.beforeEach(async ({ page }) => {
  loginpage = new LoginPage(page);
  await loginpage.goToLoginPage();
  homepage = new HomePage(page);
});

test("tc1:login page title test", async ({ page }) => {
  // let loginpage = new LoginPage(page);
  // await loginpage.goToLoginPage();
  let pageTitle = await loginpage.getLoginPageTitle();
  console.log(pageTitle);
  expect(pageTitle).toBe("Account Login");
});

test("tc2:login page logo test", async () => { //remove flower braces as well-Blank destructuring
  expect(loginpage.isLogoExist()).toBeTruthy();
});

test("tc3: forgot pwd link exist test", async () => {
  expect(await loginpage.isForgotPwdLinkExist()).toBeTruthy();
});

test("tc4:login to the page test", async () => {
  await loginpage.doLogin("pwbatchtest@open.com", "pw123");
  //expect pending
  expect.soft(await homepage.isLogoutLinkExist()).toBeTruthy();
  expect.soft(await homepage.getHomePageTitle()).toBe('My Account');
});
