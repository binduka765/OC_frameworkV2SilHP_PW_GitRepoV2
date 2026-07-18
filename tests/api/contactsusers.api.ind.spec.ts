import { ApiHelper } from "../../src/api/ApiHelper";
import { test, expect } from "../../src/fixtures/apifixtures";

const TOKEN = process.env.API_TOKEN;
let AUTH_HEADER = { Authorization: `Bearer ${TOKEN}` };

//AAA --pattern TC's:post is common for all tc's--so create a hook kind of TC=>GENERIC FN
//post -- get ===GET
//post -- get=== POST
//post -- put --get==PUT
//post -- get -- delete -- get== DELETE

//helper--generic fn: create a new user for each TC
async function createUser(apiHelper: any) {
  let userData = {
    firstName: "JillAAApost",
    lastName: "Doe",
    birthdate: "1970-01-01",
    email: `BinAutoGp_${Date.now()}@app.com`,
    phone: "8005555555",
    street1: "1 Main St.",
    street2: "Apartment A",
    city: "Anytown",
    stateProvince: "KS",
    postalCode: "12345",
    country: "USA",
  };

  let postRes = await apiHelper.post("/contacts", userData, AUTH_HEADER);
  expect(postRes.status).toBe(201);
  return postRes.body;
}

//TEST 1: create a  user test + verify : AAA pattern
test.skip("POST - Create a user + GET the same user", async ({ apiHelper }) => {
  //i)create part
  let actRes = await createUser(apiHelper);

  //ii) get the same user
  let getRes = await apiHelper.get(`/contacts/${actRes._id}`, AUTH_HEADER);
  expect(getRes.status).toBe(200);
  expect(getRes.body.firstName).toBe("JillAAApost");
});

//TEST 2: update a user test + verify: AAA pattern
test.skip("PUT-update a user test + verify if same user", async ({ apiHelper }) => {
  //i)create part
  let actRes = await createUser(apiHelper);
  //let userId = actRes.body._id;

  //ii) get the same user
  let getRes = await apiHelper.get(`/contacts/${actRes._id}`, AUTH_HEADER);
  expect(getRes.status).toBe(200);
  expect(getRes.body.firstName).toBe("JillAAApost");

  //iii)update the same user
  let updateUserData = {
    "firstName": "Jimupdated",
    "lastName": "DoLittleDon",
    "email": `BinAutoGp_${Date.now()}@app.com`,
    "phone": "8005555455",
    "street1": "3 West Far St.",
    "street2": "Apartment Z",
    "city": "SomeFartown",
    
}
  let putRes = await apiHelper.put(`/contacts/${actRes._id}`,updateUserData, AUTH_HEADER);
  expect(putRes.status).toBe(200);
  expect(putRes.body.firstName).toBe(updateUserData.firstName);
  
  //iv) get the updated same user:
  let res = await apiHelper.get(`/contacts/${actRes._id}`,AUTH_HEADER);
  expect(res.status).toBe(200);
  expect(res.body.firstName).toBe(updateUserData.firstName);
  expect(res.body.lastName).toBe(updateUserData.lastName);
  expect(res.body.city).toBe(updateUserData.city);
});


//BELOW TC FAILS: Needs a FIX
//TEST 3: Delete user + verify : AAA pattern => create new user + get userid from resBody and append the id in delete call+get the deleted Id
test.skip('DELETE - delete user test + verify if deleted/not', async ({apiHelper})=>{
    //i)create a new user:

    let postRes = await createUser(apiHelper);
    //let userId = postRes._id;

    //ii) delete the same userId created
    let delRes = await apiHelper.delete(`/contacts/${postRes._id}`,AUTH_HEADER);
    expect(delRes.status).toBe(200);
   // expect(delRes.body).toBe("Contact deleted")

    //iii)get the deleted user:
    let getRes = await apiHelper.get(`/contacts/postRes._id`, AUTH_HEADER);
    expect(getRes.status).toBe(404);

});
