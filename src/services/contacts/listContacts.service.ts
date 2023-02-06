import { clientRepository } from "../../utilities/repositories";

const ListContactsService = async (id: string) => {
  const client = await clientRepository.findOne({
    where: { id },
    relations: { contacts: true },
  });

  return client!.contacts;
};

export default ListContactsService;
