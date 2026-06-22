import { Page } from "playwright";


export class BasePage {

  protected readonly page: Page; //class var public
  constructor(page:Page){
    this.page = page;
  }


}