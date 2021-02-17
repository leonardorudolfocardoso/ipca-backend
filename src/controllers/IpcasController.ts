import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Ipca from '../models/Ipca';

import ipcaView from '../views/ipcas_view';

import ImportIpcasService from '../services/ImportIpcasService';

import dateParser from '../utils/DateParser';


export default {
    async index(request: Request, response: Response) {
        const ipcaRepository = getRepository(Ipca);

        const ipcas = await ipcaRepository.find();

        return response.json(ipcaView.renderMany(ipcas));
    },

    async show(request: Request, response: Response) {

    },

    async import(request: Request, response: Response) {
        const { id, variavel, unidade, resultados } = request.body[0];

        const serie = resultados[0].series[0].serie;

        const ipcas: Ipca[] = Object.keys(serie).map(value => {
            const date = dateParser(value);
            return ({
                date,
                year: date.getFullYear(),
                month: date.getMonth(),
                value: serie[value],
            })
        });

        const importIpcasService = new ImportIpcasService();

        const newIpcas = await importIpcasService.execute(ipcas);
    
        return response.json(newIpcas);
    }
}