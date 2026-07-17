

import {test, expect} from '@playwright/test';

let OAUTH_CONFIG = {
    tokenUrl: 'https://test.api.amadeus.com/v1/security/oauth2/token',
    clientId:process.env.OAUTH_CLIENT_ID!,
    clientSecret:process.env.OAUTH_CLIENT_SECRET!,
    grantType:process.env.GRANT_TYPE!
}
//creating token var as global var:
let accessToken:string;

//writing independent tc:without using ApiFixtures file
test.beforeEach('POST -- generate the access token', async ({request})=>{
    let postRes = await request.post(OAUTH_CONFIG.tokenUrl, {
        form:{
            grant_type:OAUTH_CONFIG.grantType,
            client_id:OAUTH_CONFIG.clientId,
            client_secret:OAUTH_CONFIG.clientSecret
        }
    });

    expect(postRes.status()).toBe(200);
    let jsonRes = await postRes.json();
    console.log(jsonRes);
    accessToken = jsonRes.access_token;
});

//actual test:
test('GET -- get location data', async ({request})=>{
//https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY,AIRPORT&keyword=MUC&countryCode=DE
    let baseURL = 'https://test.api.amadeus.com';
    let endPtUrl = '/v1/reference-data/locations';

    let queryParam = {
        subType:'CITY,AIRPORT',
        keyword:'MUC',
        countryCode:'DE'
    }

    let getRes = await request.get(`${baseURL}${endPtUrl}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        params: queryParam
    });

    expect(getRes.status()).toBe(200);
    console.log(await getRes.json());

    let locJson = await getRes.json();
    console.log(locJson.meta.count);

    let loc1 = locJson.data[0];
    console.log(loc1);

})