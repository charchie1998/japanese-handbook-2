import express, { Request, Response } from 'express';

import { kanjiService } from '../../../service';

const kanjiRouter = express.Router();

kanjiRouter.post('/get', async (req: Request, res: Response) => {
    try {
        const request = req.body;
        const response = await kanjiService.getKanji(request);
        res.send(response);
    } catch (error: any) {
        console.error("Error:", error.message);
        res.status(500).send('Internal Server Error');
    }
});

kanjiRouter.post('/add', async (req: Request, res: Response) => {
    try {
        const request = req.body;
        const response = await kanjiService.addKanji(request);
        res.send(response);
    } catch (error: any) {
        console.error("Error:", error.message);
        res.status(500).send('Internal Server Error');
    }
});

kanjiRouter.post('/edit', async (req: Request, res: Response) => {
    try {
        const request = req.body;
        const response = await kanjiService.addKanji(request);
        res.send(response);
    } catch (error: any) {
        console.error("Error:", error.message);
        res.status(500).send('Internal Server Error');
    }
});

kanjiRouter.post('/remove', async (req: Request, res: Response) => {
    try {
        const request = req.body;
        const response = await kanjiService.addKanji(request);
        res.send(response);
    } catch (error: any) {
        console.error("Error:", error.message);
        res.status(500).send('Internal Server Error');
    }
});

export default kanjiRouter;