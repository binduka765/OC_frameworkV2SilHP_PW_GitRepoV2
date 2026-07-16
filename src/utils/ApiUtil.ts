import { request } from '@playwright/test';

import { APIRequestContext } from '@playwright/test';

export class ApiUtil {
  public static async createTokenId(): Promise<string | null> {
    const tokenData = {
      username: "admin",
      password: "password123"
    };

    const response = await request.post('https://restful-booker.herokuapp.com/auth', {
      headers: {
        'Content-Type': 'application/json'
      },
      data: tokenData
    });

    if (response.ok()) {
      const jsonBody = await response.json();

      // Assuming the token is in "token" field of response
      const token = jsonBody.token;
      console.log('Generated Token:', token);
      return token;
    } else {
      console.error('Failed to generate token:', response.status());
      return null;
    }
  }
}