import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/base-pruebas/08-imp-exp";

describe('test on 08-imp-exp-test.js', () => {
  test('getHeroById should return a hero by ID',() =>{
    const testId = 1;
    const hero = getHeroeById(testId);

    expect(hero).toStrictEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
  });

    test('getHeroById should return undefined if hero doesnt exist',() =>{
        const testId = 10;
        const hero = getHeroeById(testId);

        expect(hero).toBe(undefined);
        expect(hero).toBeFalsy();

    });

  test('getHeroesByOwner should return all Marvel heroes inside an array',() =>{
    const testOwer = 'Marvel';
    const heros = getHeroesByOwner(testOwer);
    console.log(heros);

    expect(heros.length).toBe(2);
  });

  test('getHeroesByOwner should return all DC heroes inside an array',() =>{
    const testOwer = 'DC';
    const heros = getHeroesByOwner(testOwer);
    
    expect(heros.length).toBe(3);
    expect(heros).toStrictEqual([
        { id: 1, name: 'Batman', owner: 'DC' },
        { id: 3, name: 'Superman', owner: 'DC' },
        { id: 4, name: 'Flash', owner: 'DC' }
    ]);

    });
});
