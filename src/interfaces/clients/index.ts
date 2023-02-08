export interface IClientRequest {
  email: string;
  password: string;
  fullName: string;
  phone: string;
}

export interface IClientLogin {
  email: string;
  password: string;
}

export interface IClientUpdate extends IClientRequest {
  id: string;
}
