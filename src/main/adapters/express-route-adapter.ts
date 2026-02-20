import { Request, Response } from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Controller, HttpRequest } from '../../presentation/protocols/http.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const adaptRoute = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            body: req.body,
            params: req.params,
            query: req.query
        };
        const httpResponse = await controller.handle(httpRequest);

        // Content Negotiation for Web Browser
        if (req.accepts('html') && httpResponse.statusCode === 200) {
            const publicPath = path.resolve(__dirname, '../../../public/api-response.html');
            return res.sendFile(publicPath);
        }

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};
