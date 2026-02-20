import { GetWelcomeMessage } from '../../domain/use-cases/get-welcome-message.use-case.js';
import { Controller, HttpRequest, HttpResponse } from '../protocols/http.js';

export class WelcomeController implements Controller {
    constructor(private readonly getWelcomeMessage: GetWelcomeMessage) { }

    async handle(_httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const welcomeMessage = this.getWelcomeMessage.execute();
            return {
                statusCode: 200,
                body: welcomeMessage
            };
        } catch (_error) {
            return {
                statusCode: 500,
                body: { error: 'Internal Server Error' }
            };
        }
    }
}
