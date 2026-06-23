import test, { expect } from "@playwright/test";
import { LoginPage } from "../src/pages/LoginPage";
import { HomePage } from "../src/pages/HomePage";

let loginpage: LoginPage;
let homepage: HomePage;

test.beforeEach(async ({ page }) => {
  loginpage = new LoginPage(page);
  await loginpage.goToLoginPage();
  await loginpage.doLogin('pwbatchtest@open.com', 'pw123');
  homepage = new HomePage(page);
});

test('tc5:home page title test', async ({})=>{
 expect(await homepage.getHomePageTitle()).toBe('My Account');
});

test('tc6:on home page logout link exist test', async ({})=>{
  expect(await homepage.isLogoutLinkExist()).toBeTruthy();
});

test('tc7:total count of headers on home page test', async ({})=>{
  expect(await homepage.allHeadersCount()).toBe(4);
});

test('tc8: verify all headers on home page test', async ({})=>{

  let headersList = await homepage.getAllHeaders();
  console.log('home page headers:', headersList);
  expect.soft(headersList).toHaveLength(4);
  expect.soft(headersList).toEqual([
    'My Account',
    'My Orders',
    'My Affiliate Account',
    'Newsletter'
  ])

  
})

