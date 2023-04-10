import { getUser, getUsuarioActivo } from "../../base-pruebas/base-pruebas/05-funciones"

describe('Test on 05-funciones', () => {
  
    test('getUser should return an object', () => {
      const testUser = {
        uid: 'ABC123',
        username: 'One_piece3'
      }

      const user = getUser();

      expect( testUser ).toEqual( user );
    });
   
    test('getUsuarioActivo should return an object', () => {
        
        const name = 'Brandon';
        const user = getUsuarioActivo(name);

        expect( user ).toEqual( {
            uid: 'ABC567',
            username: 'Brandon'
        });     
    });

    test('getUsuarioActivo should return an object with field name equal to Brandon', () => {
          const name = 'Brandon';
          const user = getUsuarioActivo(name);
    
          expect( name ).toBe( user.username );      
    });    
});
