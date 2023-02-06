import { clientRepository } from "../../utilities/repositories";

const listClientService = async (id: string) => {
  const client = clientRepository.findOne({
    where: { id },
    relations: { contacts: true },
  });

  return client;
};

export default listClientService;
