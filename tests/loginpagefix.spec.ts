import { test, expect } from "../src/fixtures/pagefixtures";
import { HomePage } from "../src/pages/HomePage";
import { csvhelper } from "../src/utils/csvhelper";
import { JsonHelper } from "../src/utils/jsonhelper";

test.beforeEach(async ({ loginpage }) => {
  await loginpage.goToLoginPage();
});

test("tc1:login page title test", async ({ loginpage }) => {
  // let loginpage = new LoginPage(page);
  // await loginpage.goToLoginPage();
  let pageTitle = await loginpage.getLoginPageTitle();
  console.log(pageTitle);
  expect(pageTitle).toBe("Account Login");
});

test("tc2:login page logo test", async ({ loginpage }) => {
  //remove flower braces as well-Blank destructuring
  expect(loginpage.isLogoExist()).toBeTruthy();
});

test("tc3: forgot pwd link exist test", async ({ loginpage }) => {
  expect(await loginpage.isForgotPwdLinkExist()).toBeTruthy();
});

test("tc4:user able to login to the page test", async ({
  loginpage,
  homepage,
}) => {
  await loginpage.doLogin(process.env.APPUSERNAME!, process.env.APPPASSWORD!);
  //expect pending
  expect.soft(await homepage.isLogoutLinkExist()).toBeTruthy();
  expect.soft(await homepage.getHomePageTitle()).toBe("My Account");
});

//DD_1:running in sequential mode: disadvantage--shows as only one TC on report
//hence test data from fixtures -- has a DRAWBACK
// test('tc:NEGATIVE TEST login to app using wrong creds', async ({loginpage, testdata})=>{
//     for(let row of testdata){
//       await loginpage.doLogin(row.username, row.password);
//       expect(loginpage.isInvalidLoginMesgeDisplayed()).toBeTruthy();
//     }
// });

test("login test", async ({ loginpage, logintestdata }) => {
  for (const row of logintestdata) {
    await loginpage.doLogin(row.username, row.password);
  }
});

//DD_2 direct pull of data from dot csv file thru helper file
//without fixtures, parallel mode, read csv directly and loop the test method row wise
let testrecord = csvhelper.readCsv("src/data/logindata.csv"); //Data Provider

for (let row of testrecord) {
  test(`Negative-invalid login test ${row.username} - ${row.password}`, async ({
    loginpage,
  }) => {
    await loginpage.doLogin(row.username, row.password);
    expect(loginpage.isInvalidLoginMesgeDisplayed()).toBeTruthy();
  });
}

//test to retrieve the row num of csv file and append to tc:
for (const [index, row] of testrecord.entries()) {
  const csvRowNum = index + 2;

  test(`TC_Row_${csvRowNum}: Invalid login test with ${row.username}-${row.password}`, async ({
    loginpage,
  }) => {
    await loginpage.doLogin(row.username, row.password);

    expect(loginpage.isInvalidLoginMesgeDisplayed()).toBeTruthy();
  });
}

let loginJSONdata = JsonHelper.readJson("src/data/logindata.json");

for (let row of loginJSONdata) {
  test(`NEGATIVE:invalid login test with JSON data ${row.username}:${row.password}`, async ({
    loginpage,
  }) => {
    await loginpage.doLogin(row.username, row.password);
    expect(await loginpage.isInvalidLoginMesgeDisplayed()).toBeTruthy();
  });
}
