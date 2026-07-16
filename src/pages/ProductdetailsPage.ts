import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductdetailsPage extends BasePage {
  //1.private page class vars:Locators
  private readonly header: Locator;
  private readonly productImages: Locator;
  private readonly prodMetaData: Locator;
  private readonly pricingData: Locator;
  private map: Map<string, string | number>;

  private readonly cartBtnToBeEmptied:Locator;
  private readonly removeBtn:Locator;

  private readonly cartInput: Locator;
  private readonly submitToCartBtn: Locator;
  private readonly cartSuccessMesge: Locator;

  //private readonly cartItemsDisplayField: Locator;
  private readonly shoppingCartLinkFromSuccessMesge: Locator;
  private readonly viewCartLinkFromCartToggleBtn;



  //2.constructor....to initialize the local vars + calling parent class constr...as well
  constructor(page: Page) {
    super(page);
    this.header = page.getByRole("heading", { level: 1 }); //making it dynamic by removing the prodname
    //this.productImages = page.locator('ul.thumbnails li');

    this.productImages = page.locator("div#content li img");
    this.prodMetaData = page.locator(
      "div#content ul.list-unstyled:nth-of-type(1) li",
    );
    this.pricingData = page.locator(
      "div#content ul.list-unstyled:nth-of-type(2) li",
    );
    this.map = new Map<string, string | number>();

    this.cartBtnToBeEmptied = page.locator('button.btn.btn-inverse.btn-block.btn-lg.dropdown-toggle');
    this.removeBtn = this.page.locator("button.btn.btn-danger.btn-xs");

    this.cartInput = page.getByRole('textbox', { name: 'Qty' });
    this.submitToCartBtn = page.getByRole('button', { name: 'Add to Cart' });
    this.cartSuccessMesge = page.locator('div.alert.alert-success.alert-dismissible');

    this.viewCartLinkFromCartToggleBtn=page.getByText('View Cart', { exact: true });

    this.shoppingCartLinkFromSuccessMesge = page.getByRole('link', { name: 'shopping cart' }).last();
  }

  //3.page Actions:
  async getProductHeader(): Promise<string> {
    return await this.header.innerText();
  }

  async getProductImagesCount(): Promise<number> {
    //await this.page.waitForTimeout(4000); //since static wait - not recommended
    await this.productImages.first().waitFor({ state: "visible" });
    return await this.productImages.count();
  }
  /**
   * @returns this method is returning the actual product data: header, images, metadata, pricing data
   */

  async getCompleteProductInfo(): Promise<Map<string, string | number>> {
    this.map.set("ProductHeader", await this.getProductHeader());
    this.map.set("ProductImages", await this.getProductImagesCount());
    await this.getProductMetaData(); //private method being called internally by public method-ENCAPSULATION
    await this.getProductPriceData();
    return this.map;
  }

  // Brand: Apple
  // Product Code: Product 18
  // Reward Points: 800
  // Availability: Out Of Stock

  private async getProductMetaData(): Promise<void> {
    let meta = await this.prodMetaData.allInnerTexts();
    for (let row of meta) {
      let metaList = row.split(":");
      let metaKey = metaList[0].trim();
      let metaVal = metaList[1].trim();
      this.map.set(metaKey, metaVal);
    }
  }

  //         $2,000.00
  // Ex Tax: $2,000.00

  private async getProductPriceData(): Promise<void> {
    let priceData = await this.pricingData.allInnerTexts();
    let productPrice = priceData[0].trim();
    let exTaxPrice = priceData[1];
    this.map.set("ProductPrice", productPrice);
    this.map.set("ExTaxPrice", exTaxPrice);
  }

  async clearTheDataToggleShoppingCartBtn(){
    await this.cartBtnToBeEmptied.click();

    let num = await this.removeBtn.count();
    console.log(num);

    if (await this.removeBtn.count() > 0) {
        await this.removeBtn.first().click();
    }
  }

  //=====================add to cart functionality:

  async addToShoppingCartAndSubmitAndNavigateToCartpage(){

    await this.clearTheDataToggleShoppingCartBtn();

    await this.cartInput.fill('2');
    await this.submitToCartBtn.click();

    await this.cartBtnToBeEmptied.click();
    //await this.viewCartLinkFromCartToggleBtn.click();
    await this.shoppingCartLinkFromSuccessMesge.click();

    // let cartPageTitle = this.page.title();
    // console.log(cartPageTitle);
    return this.page.title();
    

    // this.//1.Alert: just accept it..
    // page.on('dialog', async (popup)=>{
    //     if(popup.type()==='alert'){
    //        await this.shoppingCartLinkFromSuccessMesge.last().click(); 
    //       //await popup.accept();
    //     }
     // })



       //window.getComputedStyle(document.querySelector('button.btn.btn-danger.btn-xs'), '::before').getPropertyValue('tagname');
       //
//window.getComputedStyle(document.querySelector("button.btn.btn-danger.btn-xs i"), "::before").getPropertyValue("content").charCodeAt(1).toString(16)

  }
  
  }

  

