import express, { Request, Response } from 'express';

import { vocabularyService } from '../../../service';

const vocabularyRouter = express.Router();

vocabularyRouter.post('/get', async (req: Request, res: Response) => {
    try {
        const request = req.body;
        const response = await vocabularyService.getVocabulary(request);
        res.send(response);
    } catch (error: any) {
        console.error("Error:", error.message);
        res.status(500).send('Internal Server Error');
    }
});

vocabularyRouter.post('/add', async (req: Request, res: Response) => {
    try {
        const request = req.body;
        const response = await vocabularyService.addVocabulary(request);
        res.send(response);
    } catch (error: any) {
        console.error("Error:", error.message);
        res.status(500).send('Internal Server Error');
    }
});

vocabularyRouter.post('/edit', async (req: Request, res: Response) => {
    try {
        const request = req.body;
        const response = await vocabularyService.addVocabulary(request);
        res.send(response);
    } catch (error: any) {
        console.error("Error:", error.message);
        res.status(500).send('Internal Server Error');
    }
});

vocabularyRouter.post('/remove', async (req: Request, res: Response) => {
    try {
        const request = req.body;
        const response = await vocabularyService.addVocabulary(request);
        res.send(response);
    } catch (error: any) {
        console.error("Error:", error.message);
        res.status(500).send('Internal Server Error');
    }
});

export default vocabularyRouter;