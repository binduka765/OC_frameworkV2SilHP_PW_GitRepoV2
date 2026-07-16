
import {test, expect} from '../src/fixtures/pagefixtures';

test.beforeEach(async ({loginpage})=>{
    await loginpage.goToLoginPage();
    await loginpage.doLogin(process.env.APPUSERNAME!, process.env.APPPASSWORD!);
});

test('verify product images count', async ({homepage, searchresultspage, productdetailspage})=>{
    await homepage.doSearch('macbook');
    await searchresultspage.selectProductFromSearchResults('MacBook Pro');
    let imgCount = await productdetailspage.getProductImagesCount();
    console.log('total images: ', imgCount);
    expect(imgCount).toBe(4);

});

test('verify product Info/data', async ({homepage, searchresultspage, productdetailspage})=>{
    await homepage.doSearch('macbook');
    await searchresultspage.selectProductFromSearchResults('MacBook Pro');
    let actProdInfoMap = await productdetailspage.getCompleteProductInfo();
    console.log('Actual Product details:', actProdInfoMap);
    expect.soft(actProdInfoMap.get('ProductHeader')).toBe('MacBook Pro');
    expect.soft(actProdInfoMap.get('ProductImages')).toBe(4);
    expect.soft(actProdInfoMap.get('Brand')).toBe('Apple');
    expect.soft(actProdInfoMap.get('Product Code')).toBe('Product 18');
    expect.soft(actProdInfoMap.get('Reward Points')).toBe('800');
    expect.soft(actProdInfoMap.get('Availability')).toBe('Out Of Stock');
    expect.soft(actProdInfoMap.get('ProductPrice')).toBe('$2,000.00');
    expect.soft(actProdInfoMap.get('ExTaxPrice')).toBe('Ex Tax: $2,000.00');
});

test.skip('add items to cart and navigate to shopping Cart page test', async ({homepage, searchresultspage, productdetailspage})=>{
    await homepage.doSearch('macbook');
    await searchresultspage.selectProductFromSearchResults('MacBook Pro');
    //await productdetailspage.addItemsToTheCartAndNavigateToShoppingCartPage();//---commented on purpose
})