
import {Locator, Page} from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {

  //private class vars: Locators
  private readonly logoutLink: Locator;
  private readonly allHeaders: Locator;

  private readonly search: Locator;
  private readonly searchIcon:Locator;


  //public class construc...to initialize class vars + call super constructor
  constructor(page:Page){
    super(page);
    this.logoutLink = page.getByRole('link', { name: 'Logout' });
    this.allHeaders = page.getByRole('heading', { level: 2 });

    this.search = page.getByRole('textbox', { name: 'Search' });
    this.searchIcon = page.locator('div#search button');

    //this.user = page.locator('div#fakeToBeDeleted');
  }


  //public page Actions/behaviour:
  async getHomePageTitle():Promise<string>{
    return await this.page.title();
  }

  async isLogoutLinkExist():Promise<boolean>{
   return await this.logoutLink.isVisible();
  }

  async allHeadersCount():Promise<number>{
    return await this.allHeaders.count();
  }

  async getAllHeaders():Promise<string[]>{
    return await this.allHeaders.allInnerTexts();
  }

  async doSearch(searchKey:string):Promise<void>{
    console.log(`search key: ${searchKey}`);
    await this.search.fill(searchKey);
    await this.searchIcon.click();
  }

}

