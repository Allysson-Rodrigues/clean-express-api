import dotenv from 'dotenv';
import { setupApp } from './main/config/app.js';

// Carrega variáveis de ambiente
dotenv.config();

const app = setupApp();
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`[CLEAN ARCH] Servidor rodando em http://localhost:${PORT}`);
        console.log(`Modo: ${process.env.NODE_ENV || 'development'}`);
    });
}

export default app;

