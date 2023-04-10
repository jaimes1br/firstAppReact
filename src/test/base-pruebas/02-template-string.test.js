import { getSaludo } from "../../base-pruebas/base-pruebas/02-template-string";

describe('Test on 02-template-string',() =>{
    test('should be return "Hola Brandon"', () => {
        const name = 'Brandon'
        const message = getSaludo( name );

        expect(message).toBe('Hola Brandon');
    });
    
});