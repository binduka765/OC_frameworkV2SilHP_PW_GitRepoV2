
import {test, expect} from '../../src/fixtures/apifixtures';

const TOKEN = process.env.API_TOKEN;
let AUTH_HEADER = {Authorization: `Bearer ${TOKEN}` };




//tc's: independent of each other - AAA pattern
//helper - generic function = create a fresh user - as common to each tc
async function createUser(apiHelper:any){

        const userData = {
            name: "Tenali Ramakrishna",
            email: `BinAutoGp_${Date.now()}@app.com`,
            gender: "male",
            status: "inactive",
          };
        
          let response = await apiHelper.post(
            "/public/v2/users",
            userData,
            AUTH_HEADER,
          );
          expect(response.status).toBe(201);
          return response.body;

}

//Test 1: Create a user test + verify: AAA pattern
//POST --> userId --> Get/userId -- to verify
test('POST - create a user', async ({apiHelper})=>{
  //create a user:
  let postRes = await createUser(apiHelper);

  //get the user:
  let actualRes = await apiHelper.get(`/public/v2/users${postRes.id}`, AUTH_HEADER);
  console.log(actualRes.body);
  expect(actualRes.status).toBe(200);
  expect(actualRes.body.name).toBe("Tenali Ramakrishna");
});

