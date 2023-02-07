export interface IContactRequest {
  email: string;
  fullName: string;
  phone: string;
}

export interface IContactUpdate extends IContactRequest {
  id: string;
}
