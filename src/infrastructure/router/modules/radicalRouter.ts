import express, { Request, Response } from 'express';

import { radicalService } from '../../../service';

const radicalRouter = express.Router();

radicalRouter.post('/get', async (req: Request, res: Response) => {
    try {
        const request = req.body;
        const response = await radicalService.getRadical(request);
        res.send(response);
    } catch (error: any) {
        console.error("Error:", error.message);
        res.status(500).send('Internal Server Error');
    }
});

radicalRouter.post('/add', async (req: Request, res: Response) => {
    try {
        const request = req.body;
        const response = await radicalService.addRadical(request);
        res.send(response);
    } catch (error: any) {
        console.error("Error:", error.message);
        res.status(500).send('Internal Server Error');
    }
});

radicalRouter.post('/edit', async (req: Request, res: Response) => {
    try {
        const request = req.body;
        const response = await radicalService.addRadical(request);
        res.send(response);
    } catch (error: any) {
        console.error("Error:", error.message);
        res.status(500).send('Internal Server Error');
    }
});

radicalRouter.post('/remove', async (req: Request, res: Response) => {
    try {
        const request = req.body;
        const response = await radicalService.addRadical(request);
        res.send(response);
    } catch (error: any) {
        console.error("Error:", error.message);
        res.status(500).send('Internal Server Error');
    }
});

export default radicalRouter;