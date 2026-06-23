

export class stringutil {
    public static getRandomEmailId():string{
      const emailId = `veniKa${Date.now()}@open.com`;
      return emailId;
    }
}