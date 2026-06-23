
import test, { expect } from "playwright/test";
import { LoginPage } from "../src/pages/LoginPage";
import { RegistrationPage } from "../src/pages/RegistrationPage";
import { stringutil } from "../src/utilis/stringutil";

let loginpage: LoginPage;
let registrationpage:RegistrationPage;

test.beforeEach(async ({ page }) => {
  loginpage = new LoginPage(page);
  await loginpage.goToLoginPage();
  await loginpage.navigateToRegistrationPage();
  registrationpage = new RegistrationPage(page);
  
});

test('tc1: registration page title test', async ({})=>{
    let pageTitle = await registrationpage.getRegPageTitle();
    console.log('page title: ',pageTitle);
    expect(pageTitle).toBe("Register Account");
  
});

test('tc2:user register test', async ({})=>{
     expect(await registrationpage.registerUser('Kiwi', 'Dilip',stringutil.getRandomEmailId(),'9087162534','KiwiD26','yes')).toBeTruthy();
});
