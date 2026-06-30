import { test, expect } from "../src/fixtures/pagefixtures";
//import { searchresultspage } from '../src/pages/SearchresultsPage';
import { csvhelper } from "../src/utils/csvhelper";

test.beforeEach(async ({ loginpage }) => {
  await loginpage.goToLoginPage();
  await loginpage.doLogin(process.env.APPUSERNAME!, process.env.APPPASSWORD!);
});

let productData = csvhelper.readCsv("src/data/product.csv");
for (let row of productData) {
  test(`DDT:verify search results count ${row.searchKey}-${row.productName}`, async ({
    homepage,
    searchresultspage,
  }) => {
    await homepage.doSearch("macbook");
    expect(await searchresultspage.getProductsCountofSearchResults()).toBe(
      Number(row.resultCount),
    );
  });
}

for (let row of productData) {
  test(`verify user able to land on product details page ${row.searchKey}-${row.productName}`, async ({
    homepage,
    searchresultspage,
    page,
  }) => {
    await homepage.doSearch(row.searchKey);
    await searchresultspage.selectProductFromSearchResults(row.productName);
    expect(await page.title()).toBe(row.productName);
  });
}
