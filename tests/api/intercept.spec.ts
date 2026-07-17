import { test, expect } from "@playwright/test";

//web appn: scroll the page - in the background intercept the network(api calls) and log them
//**=wild card -- matched all urls...

test("intercept and log requests", async ({ page }) => {
  page.route("**/*", async (route) => {
    console.log(route.request().method(), route.request().url());
    await route.continue(); //url --capture and continue./..url2 --capture --continue
  });

  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=common/home",
  );
});

//intercept with mocking
//mocking: fake data/response: can be used as test data generator on the fly
test("mock search data api", async ({ page }) => {
  let fakeProducts = [
    { name: "Fake MacBook Pro", price: "$599" },
    { name: "Fake iphone 20", price: "$999" },
  ];

  await page.route(
    "**/index.php?route=product/search&search=macbook",
    (route) => {
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(fakeProducts),
      });
    });

  await page.goto(
    "https://abc.com/index.php?route=product/search&search=macbook",
  );
 // await page.pause();

  let fakeJson = await page.evaluate(async ()=>{
    let fakeRes = await fetch('https://abc.com/index.php?route=product/search&search=macbook');
    return await fakeRes.json();
  });
  console.log('fake json response: ', fakeJson);
});
