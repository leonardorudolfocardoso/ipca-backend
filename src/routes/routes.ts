import { Request, Response, Router } from 'express';

const routes = Router();

routes.get('/', (request: Request, response: Response) => response.sendStatus(200));

routes.post('/ipca', (request: Request, response: Response) => {
    
    const { id, variavel, unidade, resultados } = request.body[0];

    const { localidade, serie } = resultados[0].series[0];

    return response.json({
        localidade,
        serie
    });
});

export default routes;