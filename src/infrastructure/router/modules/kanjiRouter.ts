import express, { Request, Response } from 'express';

const kanjiRouter = express.Router();

// GET /api/radical
kanjiRouter.get('/', (req: Request, res: Response) => {
    // return radicalController.getRadical(req, res);
});

// POST /api/radical
kanjiRouter.post('/', (req: Request, res: Response) => {
    // Handle POST request logic here
    res.send('POST /api/radical');
});

// PUT /api/radical/:id
kanjiRouter.put('/:id', (req: Request, res: Response) => {
    // Handle PUT request logic here
    const id = req.params.id;
    res.send(`PUT /api/radical/${id}`);
});

// DELETE /api/radical/:id
kanjiRouter.delete('/:id', (req: Request, res: Response) => {
    // Handle DELETE request logic here
    const id = req.params.id;
    res.send(`DELETE /api/radical/${id}`);
});

export default kanjiRouter;