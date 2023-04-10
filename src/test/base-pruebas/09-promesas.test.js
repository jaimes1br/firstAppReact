import { getHeroeByIdAsync } from "../../base-pruebas/base-pruebas/09-promesas";

describe('Test on 09-promesas', () => {

    test('getHeroeByIdAsync should return a hero', (done) => {
      const id = 1;
      getHeroeByIdAsync(id)
        .then(hero => {
            
            expect(hero).toStrictEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });

            done();
        });
    });


    test('getHeroeByIdAsync should return an error if id doenst exist', (done) => {
        const id = 77;
        getHeroeByIdAsync(id)
          .then(hero => {
            expect(hero).toBeFalsy();
            done();
          })
          .catch(error => {
            expect(error).toStrictEqual('No se pudo encontrar el héroe con el id 77');
              done();
          });
      });


    
})
