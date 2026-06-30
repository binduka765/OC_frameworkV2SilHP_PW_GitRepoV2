
import {Locator, Page} from "@playwright/test";
import {BasePage} from "./BasePage";

export class searchresultsPage extends BasePage {
    //private Locators:
    private readonly searchResults: Locator;


    //construct... of the class: to init the locators + call the parent constructor
    constructor(page:Page){
        super(page);
        this.searchResults = page.locator('div.product-layout');

    };

    //page Actions:
    async getProductsCountofSearchResults():Promise<number>{
        return await this.searchResults.count();
    }

    //this method lands on ProductDetails page:new page
    async selectProductFromSearchResults(productName:string){//creating dynamic locator
      await this.page.getByRole('heading', { name: productName, exact:true }).first().click();
    }
}