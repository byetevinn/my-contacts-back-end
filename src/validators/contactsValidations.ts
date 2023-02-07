import { AppError } from "../errors/AppError";
import { IContactRequest, IContactUpdate } from "../interfaces/contacts";
import {
  createContactSchema,
  updateContactSchema,
} from "../schemas/contactsSchemas";

export const validateCreateContact = async ({
  email,
  fullName,
  phone,
}: IContactRequest) => {
  await createContactSchema
    .validate({ email, fullName, phone }, { abortEarly: true })
    .catch((err) => {
      throw new AppError(err.errors, 400);
    });
};

export const validateUpdateContact = async ({
  id,
  email,
  fullName,
  phone,
}: IContactUpdate) => {
  await updateContactSchema
    .validate({ id, email, fullName, phone }, { abortEarly: true })
    .catch((err) => {
      throw new AppError(err.errors, 400);
    });
};
