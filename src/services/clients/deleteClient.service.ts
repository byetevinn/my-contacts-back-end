import { AppError } from "../../errors/AppError";
import { clientRepository } from "../../utilities/repositories";

const deleteClientService = async (id: string) => {
  const client = await clientRepository.findOneBy({ id });

  if (!client!.isActive) {
    throw new AppError("The account has already been deleted");
  }

  await clientRepository.update(id, {
    isActive: false,
  });

  return true;
};

export default deleteClientService;
