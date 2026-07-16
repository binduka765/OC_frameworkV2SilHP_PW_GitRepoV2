
import {Locator, Page} from '@playwright/test';
import { BasePage } from './BasePage';


export class CartPage extends BasePage {
//1.private page class vars:
private readonly cartPageHeader:Locator;
private readonly continueShoppingLink:Locator;
private readonly checkoutTopLink:Locator;

private readonly shoppingCartWebTable:Locator;


//2.page class constru...to initialize class vars + to call parent class construc...
constructor(page:Page){
    super(page);
    this.cartPageHeader = page.locator('div#content h1');
    this.continueShoppingLink = page.getByRole('link', { name: 'Continue Shopping' });
    this.checkoutTopLink = page.getByRole('link', { name: 'Checkout' }).first();

    this.shoppingCartWebTable = page.locator('div.table-responsive');
}

//3.page Actions/behaviour:
async verifyPageTitle(){
    let pageTitle = await this.page.title();
    return pageTitle;
}

async isCartPageHeaderExists(){
        let flag = this.cartPageHeader.isVisible();
        return flag;
}

async cartPageWebTableVerify(){
    await this.shoppingCartWebTable.isVisible();

    let prodName = await this.page.locator('div#content').locator('tr')
	.filter({hasText:'MacBook Pro'})
	.locator('td').nth(1).innerText();
    console.log(prodName);

    let prodPrice = await this.page.locator('div#content').locator('tr')
	.filter({hasText:'MacBook Pro'})
	.locator('td').nth(4).innerText();
    console.log(prodPrice);

    let totalPrice = await this.page.locator('div#content').locator('tr')
	.filter({hasText:'MacBook Pro'})
	.locator('td').nth(5).innerText();
    console.log(totalPrice);

}


}