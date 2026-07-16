

import {test, expect} from '../src/fixtures/pagefixtures';
import { csvhelper } from '../src/utils/csvhelper';

test.beforeEach(async ({loginpage})=>{
    await loginpage.goToLoginPage();
    await loginpage.doLogin(process.env.APPUSERNAME!, process.env.APPPASSWORD!);
  
});

const prodData = csvhelper.readCsv('src/data/product.csv');

for(const row of prodData){

test(`tc:verify search count-${row.searchKey}-${row.productName}`, async ({homepage, searchresultspage})=>{
   await homepage.doSearch(row.searchKey);
   expect(await searchresultspage.getProductsCountofSearchResults()).toBe(Number(row.resultCount));

});

}

for(const row of prodData){

test(`tc:verify user is able to land on the productdetails page-${row.searchKey}-${row.productName}`, async ({homepage, searchresultspage, page})=>{
    await homepage.doSearch(row.searchKey);
    await searchresultspage.selectProductFromSearchResults(row.productName);
    expect(await page.title()).toBe(row.productName);
});

}