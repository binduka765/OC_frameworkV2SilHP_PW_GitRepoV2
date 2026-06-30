
import { test, expect } from '@playwright/test';

const AUTH_TOKEN = { Authorization: 'Bearer e6eec72969defa5772b22533590ebc176ed8184fb982e6582b5eff0f4cbf8cdd' };

const userData = {
  name: "Tenali Ramakrishna",
  email: `BinAutoGp_${Date.now()}@app.com`,
  gender: "male",
  status: "active"
};

const userUpdatedData = {
  name: "Ramakrishna101",
  email: `BinAutoGp_${Date.now()}@app.com`,
  gender: "male",
  status: "active"
};

test.skip('TC2: get all users test', async ({ request }) => {
  const getRes = await request.get('https://gorest.co.in/public/v2/users', { headers: AUTH_TOKEN });
  console.log('Response:', getRes);
  const jsonBody = await getRes.json();

  console.log('Content-Type:', getRes.headers.get('content-type'));

  console.log('Body:', jsonBody);
  console.log('Status:', getRes.status);
  console.log('Status Text:', getRes.statusText);
});

test.skip('TC1: create user test', async ({ request }) => {
  const postRes = await request.post('https://gorest.co.in/public/v2/users', {
    headers: AUTH_TOKEN,
    json: userData // <-- use 'json' instead of 'data'
  });
  console.log('Response:', postRes);
  console.log('Status:', postRes.status);
  console.log('Status Text:', postRes.statusText);
});

test.skip('TC3: update user test', async ({ request }) => {
  const putRes = await request.put('https://gorest.co.in/public/v2/users/8529869', {
    headers: AUTH_TOKEN,
    json: userUpdatedData // <-- use 'json' here too
  });
  const updatedRes = await putRes.json();
  console.log('Updated User:', updatedRes);
  console.log('Response Status:', putRes.status);
  console.log('Response Status Text:', putRes.statusText);
});