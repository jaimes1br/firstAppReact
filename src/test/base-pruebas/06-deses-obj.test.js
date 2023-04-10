import { usContext } from "../../base-pruebas/base-pruebas/06-deses-obj"

describe('Test on 06-deses-obj', () => {
  test('usContext should return an object ', () => {
    const testUser = {
        clave: 'Roronoa',
        nombre: 'Zoro',
        edad: 34
    }

    const user = usContext(testUser);
    console.log(user);

    expect(user).toStrictEqual({
        nombreClave: 'Roronoa',
        anios: 34,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    });
  })
  
})
