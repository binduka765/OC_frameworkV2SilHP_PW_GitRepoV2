import { test, expect } from "../../src/fixtures/apifixtures";
import Ajv from "ajv";

//schema: type of response data:
// contract signed between consumer and server about the type of data: to be fetched from DB server
//schema contract: is also signed between backend Server(S) and Data Base server(DB)
//schema: always checked for responses
//ajv --> is a popular node lib for schema validation
//npm install ajv
//P --> C

//2 types of schema validations: single obj and for array obj

let TOKEN = process.env.API_TOKEN;
let AUTH_HEADER = { Authorization: `Bearer ${TOKEN}` };

//global set up of the AJV:
let ajv = new Ajv();

//define JSON schema:
let userSchema = {
  type: "object",
  properties: {
    id: {
      type: "number",
    },
    name: {
      type: "string",
    },
    email: {
      type: "string",
    },
    gender: {
      type: "string",
    },
    status: {
      type: "string",
    },
  },
  required: ["id", "name", "email", "gender", "status"],
};

test("GET - get a single user", async ({ apiHelper }) => {
  let userData = {
    name: "schema test",
    email: `auto_${Date.now()}@open.com`,
    gender: "male",
    status: "active",
  };

  //post -- create a user
  let postRes = await apiHelper.post("/public/v2/users", userData, AUTH_HEADER);
  let userId = postRes.body.id;

  //get -- get a user
  let getUserRes = await apiHelper.get(
    `/public/v2/users/${userId}`,
    AUTH_HEADER,
  );
  expect(getUserRes.status).toBe(200);

  //schema validation code:
  let validate = ajv.compile(userSchema);
  let isSchemaValid = validate(getUserRes.body);

  if (!isSchemaValid) {
    console.log("schema error: ", validate.errors);
  }

  expect(isSchemaValid).toBeTruthy();
});

let usersArraySchema = {
  type: "array",
  items: userSchema,
};

test("GET--get all users", async ({ apiHelper }) => {

    //get--get all users
   let getAllUsersRes = await apiHelper.get("/public/v2/users", AUTH_HEADER);
   expect(getAllUsersRes.status).toBe(200);

   //schema validation code:
   let allUsersValidate = ajv.compile(usersArraySchema);
   let isAllUsersSchemaValid = allUsersValidate(getAllUsersRes.body);

   if(!isAllUsersSchemaValid){
    console.log("schema error: ", allUsersValidate.errors);
   }

   expect(isAllUsersSchemaValid).toBeTruthy();

});
