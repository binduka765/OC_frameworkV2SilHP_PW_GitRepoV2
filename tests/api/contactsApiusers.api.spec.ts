import {test, expect} from '@playwright/test';

const AUTH_TOKEN = {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTQyNzgzYTY0YmJlZDAwMTU1ZjJkNWQiLCJpYXQiOjE3ODI4MzQ5MTZ9.PCiClotcQiiwgMR7H1zBAmQYStmXdpgKH1Na7EaeLWo'};

let userData = {
    "firstName": "KrantiKumar",
    "lastName": "Karthikeya",
    "birthdate": "1969-04-03",
    "email": `BinAutoGp_${Date.now()}@app.com`,
    "phone": "8005572239",
    "street1": "9 Last St.",
    "street2": "Apartment Z",
    "city": "Novosibirsk",
    "stateProvince": "Saint",
    "postalCode": "12345",
    "country": "Russia"
};

let putUserData = {
    "firstName": "Kranti101",
    "lastName": "Karthik202",
    "birthdate": "1968-03-03",
    "email": `BinAutoGp_${Date.now()}@app.com`,
    "phone": "8005572563",
    "street1": "bld. 27/К. 3, appt. 130",
    "street2": "Parkovaya 13-YA Ul",
    "city": " Moskva",
    "stateProvince": "Saint",
    "postalCode": "12345",
    "country": "Russia"
};

//get all contacts
test('tc2-Get Contacts', async ({request})=>{
    let getRes = await request.get('https://thinking-tester-contact-list.herokuapp.com/contacts',{
          headers: AUTH_TOKEN
    });
    let jsonBody = await getRes.json();
    console.log(jsonBody);
    console.log(getRes.status());
    console.log(getRes.statusText());

    expect(getRes.status()).toBe(200);

})

//POST
test('tc2: create a contact test', async ({request})=>{
  let postRes = await request.post('https://thinking-tester-contact-list.herokuapp.com/contacts', {
    headers: AUTH_TOKEN,
    data: userData
  });
  let jsonBody = await postRes.json();
  console.log(jsonBody);
  console.log(postRes.status());
  console.log(postRes.statusText());

  expect(postRes.status()).toBe(201);
})

//PUT
test('tc3:update created contact test', async ({request})=>{
  let putRes = await request.put('https://thinking-tester-contact-list.herokuapp.com/contacts/6a43ff62921e140015a8b0a8', {
      headers: AUTH_TOKEN,
      data:  putUserData
  });
  let updatedJsonBody = await putRes.json();
  console.log(updatedJsonBody);
  console.log(putRes.status());
  console.log(putRes.statusText());

  expect(putRes.status()).toBe(200);
})

//DELETE
test('tc4:delete contact test', async ({request})=>{
 let deleteRes = await request.delete('https://thinking-tester-contact-list.herokuapp.com/contacts/6a43ff62921e140015a8b0a8', {
    headers: AUTH_TOKEN
  });
  console.log(deleteRes.status());
  console.log(deleteRes.statusText());

  expect(deleteRes.status()).toBe(200);
})

