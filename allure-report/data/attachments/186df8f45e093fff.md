# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: registration.spec.ts >> tc2:user register test
- Location: tests\registration.spec.ts:25:1

# Error details

```
Error: locator.check: Clicking the checkbox did not change its state
Call log:
  - waiting for getByRole('radio', { name: 'Yes' })
    - locator resolved to <input value="1" type="radio" name="newsletter"/>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action
    - click action done
    - waiting for scheduled navigations to finish
    - navigations have finished

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - button "$ Currency " [ref=e7] [cursor=pointer]:
        - strong [ref=e8]: $
        - text: Currency
        - generic [ref=e9]: 
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "" [ref=e13] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/contact
            - generic [ref=e14]: 
          - text: "123456789"
        - listitem [ref=e15]:
          - link " My Account" [ref=e16] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
            - generic [ref=e17]: 
            - text: My Account
        - listitem [ref=e19]:
          - link " Wish List (0)" [ref=e20] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
            - generic [ref=e21]: 
            - text: Wish List (0)
        - listitem [ref=e22]:
          - link " Shopping Cart" [ref=e23] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart
            - generic [ref=e24]: 
            - text: Shopping Cart
        - listitem [ref=e25]:
          - link " Checkout" [ref=e26] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=checkout/checkout
            - generic [ref=e27]: 
            - text: Checkout
  - banner [ref=e28]:
    - generic [ref=e30]:
      - link "naveenopencart" [ref=e33] [cursor=pointer]:
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=common/home
        - img "naveenopencart" [ref=e34]
      - generic [ref=e36]:
        - textbox "Search" [ref=e37]
        - button "" [ref=e39] [cursor=pointer]:
          - generic [ref=e40]: 
      - button " 0 item(s) - $0.00" [ref=e43] [cursor=pointer]:
        - generic [ref=e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=e46]:
    - generic: 
    - list [ref=e48]:
      - listitem [ref=e49]:
        - link "Desktops" [ref=e50] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=20
      - listitem [ref=e51]:
        - link "Laptops & Notebooks" [ref=e52] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=18
      - listitem [ref=e53]:
        - link "Components" [ref=e54] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=25
      - listitem [ref=e55]:
        - link "Tablets" [ref=e56] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=57
      - listitem [ref=e57]:
        - link "Software" [ref=e58] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=17
      - listitem [ref=e59]:
        - link "Phones & PDAs" [ref=e60] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=24
      - listitem [ref=e61]:
        - link "Cameras" [ref=e62] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=33
      - listitem [ref=e63]:
        - link "MP3 Players" [ref=e64] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=34
  - generic [ref=e65]:
    - list [ref=e66]:
      - listitem [ref=e67]:
        - link "" [ref=e68] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=common/home
          - generic [ref=e69]: 
      - listitem [ref=e70]:
        - link "Account" [ref=e71] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
      - listitem [ref=e72]:
        - link "Success" [ref=e73] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/success
    - generic [ref=e74]:
      - generic [ref=e75]:
        - heading "Your Account Has Been Created!" [level=1] [ref=e76]
        - paragraph [ref=e77]: Congratulations! Your new account has been successfully created!
        - paragraph [ref=e78]: You can now take advantage of member privileges to enhance your online shopping experience with us.
        - paragraph [ref=e79]: If you have ANY questions about the operation of this online shop, please e-mail the store owner.
        - paragraph [ref=e80]:
          - text: A confirmation has been sent to the provided e-mail address. If you have not received it within the hour, please
          - link "contact us" [ref=e81] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/contact
          - text: .
        - link "Continue" [ref=e83] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
      - complementary [ref=e84]:
        - generic [ref=e85]:
          - link "My Account" [ref=e86] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
          - link "Edit Account" [ref=e87] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/edit
          - link "Password" [ref=e88] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/password
          - link "Address Book" [ref=e89] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/address
          - link "Wish List" [ref=e90] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
          - link "Order History" [ref=e91] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/order
          - link "Downloads" [ref=e92] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/download
          - link "Recurring payments" [ref=e93] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/recurring
          - link "Reward Points" [ref=e94] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/reward
          - link "Returns" [ref=e95] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/return
          - link "Transactions" [ref=e96] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/transaction
          - link "Newsletter" [ref=e97] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter
          - link "Logout" [ref=e98] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/logout
  - contentinfo [ref=e99]:
    - generic [ref=e100]:
      - generic [ref=e101]:
        - generic [ref=e102]:
          - heading "Information" [level=5] [ref=e103]
          - list [ref=e104]:
            - listitem [ref=e105]:
              - link "About Us" [ref=e106] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=4
            - listitem [ref=e107]:
              - link "Delivery Information" [ref=e108] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=6
            - listitem [ref=e109]:
              - link "Privacy Policy" [ref=e110] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=3
            - listitem [ref=e111]:
              - link "Terms & Conditions" [ref=e112] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=5
        - generic [ref=e113]:
          - heading "Customer Service" [level=5] [ref=e114]
          - list [ref=e115]:
            - listitem [ref=e116]:
              - link "Contact Us" [ref=e117] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/contact
            - listitem [ref=e118]:
              - link "Returns" [ref=e119] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/return/add
            - listitem [ref=e120]:
              - link "Site Map" [ref=e121] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/sitemap
        - generic [ref=e122]:
          - heading "Extras" [level=5] [ref=e123]
          - list [ref=e124]:
            - listitem [ref=e125]:
              - link "Brands" [ref=e126] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/manufacturer
            - listitem [ref=e127]:
              - link "Gift Certificates" [ref=e128] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/voucher
            - listitem [ref=e129]:
              - link "Affiliate" [ref=e130] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=affiliate/login
            - listitem [ref=e131]:
              - link "Specials" [ref=e132] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/special
        - generic [ref=e133]:
          - heading "My Account" [level=5] [ref=e134]
          - list [ref=e135]:
            - listitem [ref=e136]:
              - link "My Account" [ref=e137] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
            - listitem [ref=e138]:
              - link "Order History" [ref=e139] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/order
            - listitem [ref=e140]:
              - link "Wish List" [ref=e141] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
            - listitem [ref=e142]:
              - link "Newsletter" [ref=e143] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter
      - separator [ref=e144]
      - paragraph [ref=e145]:
        - text: Powered By
        - link "OpenCart" [ref=e146] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: naveenopencart © 2026
```

# Test source

```ts
  1   | 
  2   | import {Locator, Page} from '@playwright/test';
  3   | import { BasePage } from './BasePage';
  4   | 
  5   | export class RegistrationPage extends BasePage {
  6   | 
  7   |    //private page class vars:
  8   |    private readonly fName:Locator;
  9   |    private readonly lName:Locator;
  10  |    private readonly eMail:Locator;
  11  |    private readonly telPh:Locator;
  12  |    private readonly passWd:Locator;
  13  |    private readonly passConfirm:Locator;
  14  | 
  15  |    private readonly subscribeY:Locator;
  16  |    private readonly subscribeN:Locator;
  17  | 
  18  |    private readonly privPolicy:Locator;
  19  |    private readonly continueBtn:Locator;
  20  | 
  21  |    private readonly regSuccessMesge: Locator;
  22  | 
  23  |    private readonly loginLink:Locator;
  24  |    private readonly forgotPwdLink:Locator;
  25  | 
  26  |    //public construct...to initialize class vars + call the parent class construct...
  27  |    constructor(page:Page){
  28  |           super(page);
  29  |           this.fName = page.getByRole('textbox', { name: 'First Name' });
  30  |           this.lName = page.getByRole('textbox', { name: 'Last Name' });
  31  |           this.eMail = page.getByRole('textbox', { name: 'E-Mail' });
  32  |           this.telPh = page.getByRole('textbox', { name: 'Telephone' });
  33  |           //this.passWd = page.getByRole('textbox', { name: 'Password',exact:true });
  34  |           this.passWd = page.locator("input[type='password']").first();
  35  |           //this.passConfirm = page.getByRole('textbox', { name: 'Password Confirm', exact:true });
  36  |           this.passConfirm = page.locator("#input-confirm");
  37  | 
  38  |           this.subscribeY = page.getByRole('radio', { name: 'Yes'});
  39  |           //page.getByRole('radio', { name: 'Yes', checked: true });
  40  |           //page.getByRole('radio', { name: 'Yes', checked: false });
  41  |           //page.locator('[name="newsletter"]');
  42  | 
  43  |           this.subscribeN = page.getByRole('radio', { name: 'No'});
  44  | 
  45  |           this.privPolicy = page.locator('[name="agree"]');
  46  |           this.continueBtn = page.getByRole('button', { name: 'Continue' });
  47  | 
  48  |           this.regSuccessMesge = page.getByRole('heading', { name: 'Your Account Has Been Created!', level: 1 });
  49  |           //page.getByText('Your Account Has Been Created!', { exact: true });
  50  |           //page.locator(`h1:has-text("Your Account Has Been Created!")`);
  51  | 
  52  |           //imp page Links:
  53  |           this.loginLink = page.getByRole('link', { name: 'Login' });
  54  |           this.forgotPwdLink = page.getByRole('link', { name: 'Forgotten Password' });
  55  |    }
  56  | 
  57  |    //public page Actions/behaviour:
  58  |    async getRegPageTitle():Promise<string>{
  59  |         return await this.page.title();
  60  |    }
  61  | 
  62  |    async isLoginLinkExist():Promise<boolean>{
  63  |         return await this.loginLink.isVisible();
  64  |    }
  65  | 
  66  |    async registerUser(fn:string, ln:string, email:string, tel:string, pwd:string, subscribe:string):Promise<boolean>{
  67  | 
  68  |           await this.fName.fill('');//clear the field
  69  |           await this.fName.fill(fn);
  70  |           await this.lName.fill('');
  71  |           await this.lName.fill(ln);
  72  |           await this.eMail.fill('');
  73  |           await this.eMail.fill(email);
  74  |           await this.telPh.fill('');
  75  |           console.log("Telephone:", tel);
  76  |           await this.telPh.fill(tel);
  77  |           console.log("Telephone filled");
  78  |           //await this.page.pause();
  79  |           console.log("Password:", pwd);
  80  |           await this.passWd.fill(pwd);
  81  |           console.log("Password filled");
  82  |           //await this.page.pause();
  83  |           await this.passConfirm.fill(pwd);
  84  |           console.log("Confirm Password filled");
  85  | 
  86  |           if(subscribe==='yes'){
> 87  |             this.subscribeY.check();
      |                             ^ Error: locator.check: Clicking the checkbox did not change its state
  88  |           }else{
  89  |             this.subscribeN.check();
  90  |           }
  91  | 
  92  |           await this.privPolicy.check();
  93  |           await this.continueBtn.click();
  94  | 
  95  |           await this.regSuccessMesge.isVisible();
  96  | 
  97  |           let str = await this.regSuccessMesge.innerText();
  98  | 
  99  |           if(str==='Your Account Has Been Created!'){
  100 |             console.log('Registration--SUCCESS');
  101 |             return true;
  102 |           }else{
  103 |             console.log('Registration--FAILURE');
  104 |             return false;
  105 |           }
  106 | 
  107 | 
  108 | 
  109 |    }
  110 | 
  111 |  
  112 | 
  113 | }
  114 | 
```