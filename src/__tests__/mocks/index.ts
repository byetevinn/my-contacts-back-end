import { IClientLogin, IClientRequest } from "../../interfaces/clients";
import { IContactRequest } from "../../interfaces/contacts";

export const mockedClient: IClientRequest = {
  email: "andrade@gmail.com",
  password: "Andrade12!@",
  fullName: "Andrade Padilha",
  phone: "41998765432",
};

export const mockedClientLogin: IClientLogin = {
  email: "andrade@gmail.com",
  password: "Andrade12!@",
};

export const mockedOtherClient: IClientRequest = {
  email: "eric@gmail.com",
  password: "Eric12!@",
  fullName: "Eric Padilha",
  phone: "41998865423",
};

export const mockedContact: IContactRequest = {
  email: "victor@gmail.com",
  fullName: "Victor Oliveira",
  phone: "41998744432",
};

export const mockedWrongContact: IContactRequest = {
  email: "victor@gmail.com",
  fullName: "Victor Oliveira",
  phone: "",
};

export const mockedOtherContact: IContactRequest = {
  email: "victorino@gmail.com",
  fullName: "Victor Zita",
  phone: "41998744432",
};
