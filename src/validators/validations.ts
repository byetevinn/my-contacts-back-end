import { AppError } from "../errors/AppError";
import { IClientRequest } from "../interfaces/clients";
import {
  createClientSchema,
  updateClientSchema,
} from "../schemas/clientsSchemas";

export const validateCreateClient = async ({
  email,
  password,
  fullName,
  phone,
}: IClientRequest) => {
  await createClientSchema
    .validate({ email, password, fullName, phone }, { abortEarly: true })
    .catch((err) => {
      throw new AppError(err.errors, 400);
    });
};

export const validateUpdateClient = async ({
  email,
  password,
  fullName,
  phone,
}: IClientRequest) => {
  await updateClientSchema
    .validate({ email, password, fullName, phone }, { abortEarly: true })
    .catch((err) => {
      throw new AppError(err.errors, 400);
    });
};
