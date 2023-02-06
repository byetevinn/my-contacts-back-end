import { contactRepository } from "../../utilities/repositories";
import { IContactRequest } from "../../interfaces/contacts";
import { AppError } from "../../errors/AppError";

const contactCreateService = async ({
  email,
  fullName,
  phone,
  id,
}: IContactRequest) => {
  const contacts = await contactRepository.find();

  const emailAlreadyExists = contacts.find(
    (contact) => contact.email === email
  );

  if (emailAlreadyExists) {
    throw new AppError("Email already exists");
  }

  const contact = contactRepository.create({
    email,
    fullName,
    phone,
    client: { id },
  });

  await contactRepository.save(contact);

  return contact;
};

export default contactCreateService;
