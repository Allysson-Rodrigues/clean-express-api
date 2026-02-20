export interface HealthCheckResponse {
    status: string;
    timestamp: string;
    message: string;
    environment: string;
}

export class HealthCheckUseCase {
    execute(): HealthCheckResponse {
        return {
            status: 'ok',
            timestamp: new Date().toISOString(),
            message: 'Servidor operacional',
            environment: process.env.NODE_ENV || 'development'
        };
    }
}
