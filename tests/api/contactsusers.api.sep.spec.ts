
import {test, expect} from '../../src/fixtures/apifixtures';

const TOKEN = process.env.API_TOKEN!;
let AUTH_HEADER = {Authorization: `Bearer ${TOKEN}`};

let userId: number;

//creating GROUPING:
test.describe.serial('e2e functionality tests for contacts api-all CRUD',()=>{


//GET tests:
test.skip('GET API--get all contacts',async ({apiHelper})=>{
    let response = await apiHelper.get('/contacts', AUTH_HEADER);
    expect(response.status).toBe(200);
    //expect(response.body.length).toBeGreaterThan(0);
});

test.skip('POST API--create a new contact', async ({apiHelper})=>{
    let newUserData = {
    "firstName": "John",
    "lastName": "Doe",
    "birthdate": "1970-01-01",
    "email": `BinAutoGp_${Date.now()}@app.com`,
    "phone": "8005555555",
    "street1": "1 Main St.",
    "street2": "Apartment A",
    "city": "Anytown",
    "stateProvince": "KS",
    "postalCode": "12345",
    "country": "USA"
}

    let response = await apiHelper.post('/contacts',newUserData,AUTH_HEADER);
    expect(response.status).toBe(201);
    expect(response.body.firstName).toBe(newUserData.firstName);
    userId = response.body._id;
    console.log('Created User Id: ', userId);
});

test.skip('UPDATE API--update contact', async ({apiHelper})=>{
    let updateUserData = {
    "firstName": "Jimupdated",
    "lastName": "DoLittle",
    "birthdate": "1972-02-02",
    "email": `BinAutoGp_${Date.now()}@app.com`,
    "phone": "8005555455",
    "street1": "2 West St.",
    "street2": "Apartment B",
    "city": "Sometown",
    "stateProvince": "CA",
    "postalCode": "92243",
    "country": "USA"
}

let response = await apiHelper.put(`/contacts/${userId}`, updateUserData, AUTH_HEADER);
    expect(response.status).toBe(200);
    expect(response.body.firstName).toBe(updateUserData.firstName);
    expect(response.body.lastName).toBe(updateUserData.lastName);

});

test.skip('DELETE API--delete user', async ({apiHelper})=>{
    let response = await apiHelper.delete(`/contacts/${userId}`,AUTH_HEADER);
    expect(response.status).toBe(200);
});

    } );

