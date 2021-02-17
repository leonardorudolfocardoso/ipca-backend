import { getRepository } from "typeorm";
import Ipca from "../models/Ipca";

class ImportIpcasService {
    async execute(ipcas: Ipca[]) {
        const ipcaRepository = getRepository(Ipca);

        const newIpcas = ipcaRepository.create(ipcas);

        await ipcaRepository.save(newIpcas);

        return newIpcas;
    }
}

export default ImportIpcasService;