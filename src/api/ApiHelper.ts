
import {APIRequestContext} from '@playwright/test';




export class ApiHelper {

//1.private class vars:
private readonly request: APIRequestContext;
private readonly baseurl: string;


//2.class constructor parameterized with class vars:
constructor(request:APIRequestContext, baseurl:string){
    this.request = request;
    this.baseurl = baseurl;
}


//3.class actions/methods-using the private class vars:
//CRUD:

//GET:
async get(endpoint:string, headers?:Record<string,string>){
    let getRes = await this.request.get(`${this.baseurl}${endpoint}`,{
        headers:headers
    });
    console.log('API GET response: ', getRes);
    return {
        status: getRes.status(),
        body: await getRes.json()
    }

}

//POST:
async post(endpoint:string,data:object, headers?:Record<string,string>){
    let getRes = await this.request.post(`${this.baseurl}${endpoint}`,{
        data: data,
        headers:headers
    });
    return {
        status: getRes.status(),
        body: await getRes.json()
    }

}

//PUT:
async put(endpoint:string,data:object, headers?:Record<string,string>){
    let getRes = await this.request.put(`${this.baseurl}${endpoint}`,{
        data: data,
        headers:headers
    });
    return {
        status: getRes.status(),
        body: await getRes.json()
    }

}

//DELETE:
async delete(endpoint:string, headers?:Record<string,string>){
    let getRes = await this.request.delete(`${this.baseurl}${endpoint}`,{
        headers:headers
    });
    return {
        status: getRes.status(),
       
    }

}





}