import { test as baseTest } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { csvhelper } from "../utils/csvhelper";
import { RegistrationPage } from "../pages/RegistrationPage";
import { searchresultsPage } from "../pages/SearchresultsPage";
import { ProductdetailsPage } from "../pages/ProductdetailsPage";
import { CartPage } from "../pages/CartPage";

//define types for page fixtures:
type pageFixtures = {
  loginpage: LoginPage;
  homepage: HomePage;
  registrationpage: RegistrationPage;
  //testdata: Record<string, string>[],
  logintestdata: Record<string, string>[];
  registrationtestdata: Record<string, string>[];
  searchresultspage: searchresultsPage;
  productdetailspage: ProductdetailsPage;
  cartpage: CartPage;
};

//extend playwright base test:
export let test = baseTest.extend<pageFixtures>({
  loginpage: async ({ page }, use) => {
    let loginpage = new LoginPage(page);
    await use(loginpage);
  },

  homepage: async ({ page }, use) => {
    let homepage = new HomePage(page);
    await use(homepage);
  },

  registrationpage: async ({ page }, use) => {
    let registrationpage = new RegistrationPage(page);
    await use(registrationpage);
  },

  searchresultspage: async ({ page }, use) => {
    let searchresultspage = new searchresultsPage(page);
    await use(searchresultspage);
  },

  productdetailspage: async ({page}, use)=>{
    let productdetailspage = new ProductdetailsPage(page);
    await use(productdetailspage);
  },

  cartpage: async ({page}, use)=>{
    let cartpage = new CartPage(page);
    await use(cartpage);
  },

  // testdata: async ({}, use) => {
  //   let testrecord = csvhelper.readCsv('src/data/logindata.csv');
  //   await use(testrecord);
  // },

  logintestdata: async ({}, use) => {
    const data = csvhelper.readCsv("src/data/logindata.csv");
    await use(data);
  },

  registrationtestdata: async ({}, use) => {
    const data = csvhelper.readCsv("src/data/registrationdata.csv");
    await use(data);
  },
});

export { expect } from "@playwright/test";
