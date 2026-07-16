import { test, expect } from "../src/fixtures/pagefixtures";

test.beforeEach(async ({ loginpage }) => {
  await loginpage.goToLoginPage();
  await loginpage.doLogin(process.env.APPUSERNAME!, process.env.APPPASSWORD!);
});

test("tc1:Add items/submit N navigate to cart page-verify title test", async ({
  homepage,
  searchresultspage,
  productdetailspage,
  cartpage,
  page,
}) => {
  await homepage.doSearch("macbook");
  await searchresultspage.selectProductFromSearchResults("MacBook Pro");
  console.log(await page.title());
  await productdetailspage.addToShoppingCartAndSubmitAndNavigateToCartpage(); //commented on purpose
  //await page.pause();
  console.log("URL after navigation:", page.url());
  expect(await cartpage.verifyPageTitle()).toBe("Shopping Cart");
});

test("tc2: cart page header exists test", async ({
  homepage,
  searchresultspage,
  productdetailspage,
  cartpage,
}) => {
  await homepage.doSearch("macbook");
  await searchresultspage.selectProductFromSearchResults("MacBook Pro");
  await productdetailspage.addToShoppingCartAndSubmitAndNavigateToCartpage();
  expect(await cartpage.isCartPageHeaderExists()).toBe(true);
});

test.skip("tc3: web table verification test", async ({ cartpage }) => {
  await cartpage.cartPageWebTableVerify();
});
