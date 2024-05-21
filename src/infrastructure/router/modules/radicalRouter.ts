import express, { Request, Response } from 'express';

import radicalUsecase from '../../../application/usecase/radical';
import persistence from '../../../application/utilities/persistence';

const radicalRouter = express.Router();

// GET /api/radical
radicalRouter.get('/', (req: Request, res: Response) => {
    try {
        persistence.connect();
        const radicalId = req.body;
        const response = radicalUsecase.getRadical(radicalId);

        persistence.disconnect();
        res.send(response);
    } catch (error) {
        console.log(error);
        persistence.disconnect();
        res.status(500).send('Internal Server Error');
    }
});

// POST /api/radical
radicalRouter.post('/', async (req: Request, res: Response) => {
    try {
        persistence.connect();
        const radical = req.body || {};
        console.log("Radical", radical);
        const response = await radicalUsecase.addRadical(radical);

        persistence.disconnect();
        res.send(response);
    } catch (error) {
        console.log(error);
        persistence.disconnect();
        res.status(500).send('Internal Server Error');
    }
});

// PUT /api/radical/:id
radicalRouter.put('/:id', (req: Request, res: Response) => {
    // Handle PUT request logic here
    const id = req.params.id;
    res.send(`PUT /api/radical/${id}`);
});

// DELETE /api/radical/:id
radicalRouter.delete('/:id', (req: Request, res: Response) => {
    // Handle DELETE request logic here
    const id = req.params.id;
    res.send(`DELETE /api/radical/${id}`);
});

export default radicalRouter;