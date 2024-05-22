import { Request, Response, NextFunction } from 'express';

const requestParser = (req: Request, res: Response, next: NextFunction) => {
    req.body = req.body || {};
    req.params = req.params || {};
    req.query = req.query || {};
    next();
}

export default requestParser;