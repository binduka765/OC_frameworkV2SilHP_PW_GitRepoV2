
import {test, expect} from '../src/fixtures/pagefixtures';
import { HomePage } from '../src/pages/HomePage';
import { csvhelper } from '../src/utilis/csvhelper';
import { stringutil } from '../src/utilis/stringutil';

test.beforeEach(async ({ loginpage, registrationpage}) => {
  await loginpage.goToLoginPage();
  await loginpage.navigateToRegistrationPage();
});

test("tc1:register page title test", async ({ registrationpage }) => {
  // let loginpage = new LoginPage(page);
  // await loginpage.goToLoginPage();
  let regPageTitle = await registrationpage.getRegPageTitle();
  console.log(regPageTitle);
  expect(regPageTitle).toBe("Register Account");
});


test('tc2:user register test', async ({registrationpage})=>{
     expect(await registrationpage.registerUser('Kiwi', 'Dilip',stringutil.getRandomEmailId(),'9087162534','KiwiD26','yes')).toBeTruthy();
});


//DD_1:running in sequential mode: disadvantage--shows as only one TC on report
//hence test data from fixtures -- has a DRAWBACK
// test('tc:POSITIVE TEST user register using data from csv file', async ({registrationpage, testdata})=>{
//     for(let row of testdata){
//       expect(await registrationpage.registerUser(row.fn, row.ln, stringutil.getRandomEmailId(), row.tel,row.pwd,row.subscribe)).toBeTruthy();
//     }
// });

test('registration test', async ({ registrationpage, registrationtestdata }) => {

  for (const row of registrationtestdata) {

    await registrationpage.registerUser(
      row.fn,
      row.ln,
      stringutil.getRandomEmailId(),
      row.tel,
      row.pwd,
      row.subscribe
    );

  }

});

//DD_2 direct pull of data from dot csv file thru helper file
//without fixtures, parallel mode, read csv directly and loop the test method row wise
let testrecord = csvhelper.readCsv('src/data/registrationdata.csv'); //Data Provider

    for(let row of testrecord){
      
        test(`POSITIVE registration test ${row.username} - ${row.password}`, async ({registrationpage})=>{
            await registrationpage.registerUser(row.fn, row.ln, stringutil.getRandomEmailId(), row.tel, row.pwd,row.subscribe);
            
  
        });

    }


