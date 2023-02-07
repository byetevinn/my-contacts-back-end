import { AppError } from "../../errors/AppError";
import { contactRepository } from "../../utilities/repositories";

const deleteContactService = async (id: string) => {
  const contact = await contactRepository.findOneBy({ id });

  if (!contact) {
    throw new AppError("The contact has already been deleted");
  }

  await contactRepository.delete(id);

  return true;
};

export default deleteContactService;
