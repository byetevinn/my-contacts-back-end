import { Client } from "../entities/clients.entity";
import { Contacts } from "../entities/contacts.entity";
import AppDataSource from "../data-source";

export const clientRepository = AppDataSource.getRepository(Client);
export const contactRepository = AppDataSource.getRepository(Contacts);
