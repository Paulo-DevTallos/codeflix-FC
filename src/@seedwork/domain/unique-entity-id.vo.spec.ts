import { InvalidUuidError } from "./errors/invalid-uuid.error";
import UniqueEntityId from "./unique-entity-id.vo";

describe('UniqueEntityId unit test', () => {
    /**
     * chamando a instancia de uma classe de Exception esperamos que ao 
     * executar uma função com um id fake ela estoure a exception
     */
    it('sould test throw error when uuid is invalid', () => {
        expect(() => new UniqueEntityId('fake id'))
            .toThrow(new InvalidUuidError());
    });

    it('sould test if a validate method was called', () => {
        const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate');
        expect(() => new UniqueEntityId('fake id'))
            .toThrow(new InvalidUuidError());
        expect(validateSpy).toHaveBeenCalled();
    });

    it('sould test if a validate method was not been called', () => {
        const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate');
        expect(validateSpy).not.toHaveBeenCalled();
    });
});