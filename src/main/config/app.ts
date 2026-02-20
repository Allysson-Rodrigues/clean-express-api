import cors from 'cors';
import express, { Express, NextFunction, Request, Response, Router } from 'express';
import helmet from 'helmet';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import setupRoutes from './routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const setupApp = (): Express => {
    const app = express();

    // Middlewares
    app.use(helmet({
        contentSecurityPolicy: false, // Desabilitado temporariamente para facilitar carregamento de fontes/estilos externos se necessário
    }));
    app.use(cors());
    app.use(express.json());

    // Static Files
    const publicPath = path.resolve(__dirname, '../../../public');
    app.use(express.static(publicPath));

    // Routes
    const router = Router();
    app.use(router);
    setupRoutes(router);

    // Global Error Handler
    app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
        const isDevelopment = process.env.NODE_ENV === 'development';
        console.error('[ERROR]', {
            message: err.message,
            stack: isDevelopment ? err.stack : undefined,
            timestamp: new Date().toISOString()
        });
        res.status(500).json({
            error: 'Internal Server Error',
            message: isDevelopment ? err.message : 'Algo deu errado no processamento da sua requisição.'
        });
    });

    return app;
};
