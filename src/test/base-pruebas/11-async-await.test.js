import { getImagen } from "../../base-pruebas/base-pruebas/11-async-await"

describe('test on 11-async-await.test', () => {
    test('getImagen should returns an image', async() => {
      
        const url = await getImagen();
        expect(typeof url).toBe('string');
    });

    
  
})
