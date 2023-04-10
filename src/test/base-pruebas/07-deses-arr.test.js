import { usContext } from "../../base-pruebas/base-pruebas/06-deses-obj"
import { retornaArreglo } from "../../base-pruebas/base-pruebas/07-deses-arr"

describe('Test on 07-deses-arr', () => {
  test('retornaArreglo should return a string and number', () => {
    const [letters,numbers]= retornaArreglo();

    expect(letters).toBe('ABC');
    expect(numbers).toBe(123);

    expect(letters).toStrictEqual(expect.any(String));
    expect(numbers).toEqual(expect.any(Number));
  });
});
