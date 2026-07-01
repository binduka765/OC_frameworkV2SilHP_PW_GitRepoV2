
import { test, expect } from '@playwright/test';

const AUTH_TOKEN = { Authorization: 'Bearer e6eec72969defa5772b22533590ebc176ed8184fb982e6582b5eff0f4cbf8cdd' };

const userData = {
  name: "Tenali Ramakrishna",
  email: `BinAutoGp_${Date.now()}@app.com`,
  gender: "male",
  status: "inactive"
};

const userUpdatedData = {
  name: "Ramakrishna101",
  email: `BinAutoGp_${Date.now()}@app.com`,
  gender: "male",
  status: "active"
};

test('TC2: get all users test', async ({ request }) => {
  const getRes = await request.get('https://gorest.co.in/public/v2/users', { headers: AUTH_TOKEN });
  console.log(getRes);
  let jsonBody = await getRes.json();
  console.log(jsonBody);
  console.log(getRes.status());
  console.log(getRes.statusText());
});

test('TC1: create user test', async ({ request }) => {
  const postRes = await request.post('https://gorest.co.in/public/v2/users', {
    headers: AUTH_TOKEN,
    data: userData 
  });
  console.log(postRes);
  let response = await postRes.json();
  console.log(response);
  console.log('Status:', postRes.status());
  console.log('Status Text:', postRes.statusText());
});

test('TC3: update user test', async ({ request }) => {
  const putRes = await request.put('https://gorest.co.in/public/v2/users/8531303', {
    headers: AUTH_TOKEN,
    data: userUpdatedData
  });
  const updatedRes = await putRes.json();
  console.log('Updated User:', updatedRes);
  console.log('Response Status:', putRes.status());
  console.log('Response Status Text:', putRes.statusText());
});

test('TC4: delete user test', async ({request})=>{
 let delRes = await request.delete('https://gorest.co.in/public/v2/users/8531304',{
  headers:AUTH_TOKEN
 });
  console.log(delRes.status());
  console.log(delRes.statusText());

})