export interface IContactRequest {
  email: string;
  fullName: string;
  phone: string;
  id: string;
}

export interface IContactUpdate extends IContactRequest {
  id: string;
}
