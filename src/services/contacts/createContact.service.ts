import { contactRepository } from "../../utilities/repositories";
import { IContactRequest } from "../../interfaces/contacts";
import { validateCreateContact } from "../../validators/contactsValidations";
import { AppError } from "../../errors/AppError";

const contactCreateService = async (
  { email, fullName, phone }: IContactRequest,
  id: string
) => {
  const contacts = await contactRepository.find();

  const contactAlreadyExists = contacts.find(
    (contact) =>
      contact.email === email &&
      contact.fullName === fullName &&
      contact.phone === phone
  );

  if (contactAlreadyExists) {
    throw new AppError("Contact already exists");
  }

  await validateCreateContact({ email, fullName, phone });

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
