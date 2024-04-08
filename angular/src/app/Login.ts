export class Login {
    email!: string;
    pass!: string;
  }
  
  export class DecodedToken {
    id!: number;
    email!: string;
    userType!: string;
  }