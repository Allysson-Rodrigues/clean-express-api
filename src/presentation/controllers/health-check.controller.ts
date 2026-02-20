import { HealthCheckUseCase } from '../../domain/use-cases/health-check.use-case.js';
import { Controller, HttpRequest, HttpResponse } from '../protocols/http.js';

export class HealthCheckController implements Controller {
    constructor(private readonly healthCheckUseCase: HealthCheckUseCase) { }

    async handle(_httpRequest: HttpRequest): Promise<HttpResponse> {
        return {
            statusCode: 200,
            body: this.healthCheckUseCase.execute()
        };
    }
}
