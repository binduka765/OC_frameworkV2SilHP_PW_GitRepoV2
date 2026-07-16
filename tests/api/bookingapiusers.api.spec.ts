
import { test, expect } from '@playwright/test';

test('create token id',async ({request})=>{
    let tokenData = {
    "username" : "admin",
    "password" : "password123"
}

    const response = await request.post('https://restful-booker.herokuapp.com/auth',{
          headers: {
      'Content-Type': 'application/json'
    },
    data:tokenData
    });

    let jsonBody = await response.json();
    console.log(jsonBody);

});