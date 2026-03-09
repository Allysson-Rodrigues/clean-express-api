import { describe, expect, it } from "@jest/globals";
import { GetWelcomeMessageUseCase } from "./get-welcome-message.use-case.js";

describe('GetWelcomeMessageUseCase', () => {
    it('deve retornar a mensagem de boas-vindas correta', () => {
        const sut = new GetWelcomeMessageUseCase();
        const response = sut.execute();
        expect(response.message).toBe('Bem-vindo ao seu novo servidor com Clean Architecture, Allysson! O sistema está operando com excelência.');
        expect(response.docs).toBe('/health');
    });
});
