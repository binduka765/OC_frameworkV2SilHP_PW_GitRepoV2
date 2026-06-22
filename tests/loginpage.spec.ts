import test, { expect } from "playwright/test";
import { LoginPage } from "../src/pages/LoginPage";

test("tc1:login page title test", async ({ page }) => {
  let loginpage = new LoginPage(page);
  await loginpage.goToLoginPage();
  let pageTitle = await loginpage.getLoginPageTitle();
  console.log(pageTitle);
  expect(pageTitle).toBe("Account Login");
});

test("tc2:login page logo test", async ({ page }) => {
  let loginpage = new LoginPage(page);
  await loginpage.goToLoginPage();
  expect(loginpage.isLogoExist()).toBeTruthy();
});

test("tc3: forgot pwd link exist test", async ({ page }) => {
  let loginpage = new LoginPage(page);
  await loginpage.goToLoginPage();
  expect(await loginpage.isForgotPwdLinkExist()).toBeTruthy();
});

test("tc4:login to the page test", async ({ page }) => {
  let loginpage = new LoginPage(page);
  await loginpage.goToLoginPage();
  await loginpage.doLogin('pwbatchtest@open.com', 'pw123');
});
