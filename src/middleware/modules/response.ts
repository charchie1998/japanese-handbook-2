import { Request, Response } from 'express';

const responseBuilder = (req: Request, res: Response) => {
    // res.send = (data: any) => {
    //     res.status(200).send(data);
    // }

    // res.error = (error: any) => {
    //     console.log(error);
    //     res.status(500).send('Internal Server Error');
    // }
}

export default responseBuilder;