import { contactRepository } from "../../utilities/repositories";
import { IContactRequest } from "../../interfaces/contacts";
import { AppError } from "../../errors/AppError";

const contactCreateService = async ({
  email,
  fullName,
  phone,
  id,
}: IContactRequest) => {
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
