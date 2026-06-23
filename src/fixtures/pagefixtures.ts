

import {test as baseTest} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { csvhelper } from '../utilis/csvhelper';
import { RegistrationPage } from '../pages/RegistrationPage';

//define types for page fixtures:
type pageFixtures = {
    loginpage: LoginPage,
    homepage: HomePage,
    registrationpage:RegistrationPage,
    //testdata: Record<string, string>[]
    logintestdata:Record<string, string>[],
    registrationtestdata:Record<string, string>[]
};

//extend playwright base test:
export let test = baseTest.extend<pageFixtures>({

  loginpage: async ({page}, use) =>{
    let loginpage = new LoginPage(page);
    await use(loginpage);
  },

  homepage: async ({page}, use) => {
    let homepage = new HomePage(page);
    await use(homepage);
  } ,

  registrationpage: async ({page}, use) => {
    let registrationpage = new RegistrationPage(page);
    await use(registrationpage);
  },

  // testdata: async ({}, use) => {
  //   let testrecord = csvhelper.readCsv('src/data/logindata.csv');
  //   await use(testrecord);
  // },


  logintestdata: async ({}, use) => {
    const data = csvhelper.readCsv('src/data/logindata.csv');
    await use(data);
  },


  registrationtestdata: async ({}, use) => {
    const data = csvhelper.readCsv('src/data/registrationdata.csv');
    await use(data);
  }

});

export {expect} from '@playwright/test';

