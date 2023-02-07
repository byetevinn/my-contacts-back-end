import { IClientLogin, IClientRequest } from "../../interfaces/clients";

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
