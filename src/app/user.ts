export class User {
  constructor(
    public username: string,
    public password: string,
    public confirmpassword: string,
    public jwtToken?: string,
  ){

  }
}
