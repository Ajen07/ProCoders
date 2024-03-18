export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  githubId: string;
  __v: number;
  role:string
}

export interface Email {
  primary: boolean;
  email: string;
  verified: boolean;
  visibility: string;
}
