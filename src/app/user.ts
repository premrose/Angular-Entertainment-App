export class User {
  constructor(
    public username: string,
    public password: string,
    public password_confirm: string,
    public jwtToken?: string,
  ){

  }
}
