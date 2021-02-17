import { getRepository, In } from "typeorm";
import Ipca from "../models/Ipca";

class ImportIpcasService {
    async execute(ipcas: Ipca[]) {
        const ipcaRepository = getRepository(Ipca);

        // create ipcas
        const newIpcas = ipcaRepository.create(ipcas);

        // save to repository
        await ipcaRepository.save(newIpcas);

        return newIpcas;
    }
}

export default ImportIpcasService;