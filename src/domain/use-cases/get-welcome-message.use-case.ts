import { WelcomeMessage } from '../entities/welcome-message.entity';

export interface GetWelcomeMessage {
    execute(): WelcomeMessage;
}

export class GetWelcomeMessageUseCase implements GetWelcomeMessage {
    execute(): WelcomeMessage {
        return {
            message: 'Bem-vindo ao seu novo servidor com Clean Architecture, Allysson! O sistema está operando com excelência.',
            docs: '/health'
        };
    }
}
