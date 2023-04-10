describe('Pruebas en <DemoComponent/>', () =>{
    test('Esta prueba no debe fallar', () =>{

        //1. inicializacion
        const message1 = 'Hola Mundo';
        
        //2. Estimulo
        const message2 = message1.trim();
        
        //3.observar el comportamiento... esperado
        expect(message1).toBe(message2);
        
    });
});

