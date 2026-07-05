import { test, expect } from "../../src/fixtures/apifixtures";

const TOKEN = process.env.API_TOKEN!;
let AUTH_HEADER = { Authorization: `Bearer ${TOKEN}` };
let userId: number;

//to run in sequential mode - put all 4 tcs into test.describe.serial()-GROUPING
test.describe.serial('running e2e go rest all crud apis', ()=>{

//GET tests:
test("1-GET API--get all users", async ({ apiHelper }) => {
  let response = await apiHelper.get("/public/v2/users", AUTH_HEADER);
  expect(response.status).toBe(200);
  // expect(response.body.length).toBeGreaterThan(0);
});

//POST test:
test("2-POST Create a user", async ({ apiHelper }) => {
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
  expect(response.body.name).toBe(userData.name);
  userId = response.body.id;
  console.log("user id created: ", userId);
});

test("3-PUT update a user", async ({ apiHelper }) => {
  const userUpdatedData = {
    name: "Ramyakrishna101",
    email: `BinAutoGp_${Date.now()}@app.com`,
    gender: "female",
    status: "active",
  };

  let response = await apiHelper.put(`/public/v2/users/${userId}`, userUpdatedData, AUTH_HEADER);
  expect(response.status).toBe(200);
  expect(response.body.name).toBe(userUpdatedData.name);

});

test("4-DELETE delete user", async ({apiHelper})=>{
 let response = await apiHelper.delete(`/public/v2/users/${userId}`, AUTH_HEADER);
 expect(response.status).toBe(204);

});

  });
