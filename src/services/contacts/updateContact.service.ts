import { IContactUpdate } from "../../interfaces/contacts";
import { contactRepository } from "../../utilities/repositories";
import { validateUpdateContact } from "../../validators/contactsValidations";

const updateContactService = async ({
  id,
  email,
  fullName,
  phone,
}: IContactUpdate) => {
  const contact = await contactRepository.findOneBy({ id });

  await validateUpdateContact({ id, email, fullName, phone });

  await contactRepository.update(id, {
    email: email ? email : contact!.email,
    fullName: fullName ? fullName : contact!.fullName,
    phone: phone ? phone : contact!.phone,
  });

  const updatedContact = await contactRepository.findOneBy({ id });

  return updatedContact;
};

export default updateContactService;
