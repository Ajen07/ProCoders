export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export interface Email {
  primary: boolean;
  email: string;
  verified: boolean;
  visibility: string;
}
