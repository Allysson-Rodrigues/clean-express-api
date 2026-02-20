import { Router } from 'express';
import { GetWelcomeMessageUseCase } from '../../domain/use-cases/get-welcome-message.use-case.js';
import { HealthCheckUseCase } from '../../domain/use-cases/health-check.use-case.js';
import { HealthCheckController } from '../../presentation/controllers/health-check.controller.js';
import { WelcomeController } from '../../presentation/controllers/welcome.controller.js';
import { adaptRoute } from '../adapters/express-route-adapter.js';

export default (router: Router): void => {
    // Welcome Route (Redirected to Static Index in App.ts, but kept for API reference)
    const getWelcomeMessageUseCase = new GetWelcomeMessageUseCase();
    const welcomeController = new WelcomeController(getWelcomeMessageUseCase);
    router.get('/api/welcome', adaptRoute(welcomeController));

    // Health Route
    const healthCheckUseCase = new HealthCheckUseCase();
    const healthCheckController = new HealthCheckController(healthCheckUseCase);
    router.get('/health', adaptRoute(healthCheckController));
};
