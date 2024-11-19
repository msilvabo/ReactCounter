import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('prueba 08-imp-exp', () => {
  test('getHeroeById devuelve el heroe por Id si existe ', () => {
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toEqual({id: id,name: 'Batman',owner: 'DC'});
  })
  test('getHeroeById devuelve undefined, heroe por Id si NO existe ', () => {
    const id = 11;
    const hero = getHeroeById(id);
    expect(hero).toEqual(undefined);
  })

  test('getHeroesByOwner devuelve el heroe por Compañia DC ', () => {
    const owner = 'DC';
    const heros = getHeroesByOwner(owner);
    expect(heros.length).toBe(3);
  })

  test('getHeroesByOwner devuelve el heroe por Compañia MARVEL', () => {
    const owner = 'Marvel';
    const heros = getHeroesByOwner(owner);
    expect(heros.length).toBe(2); 
  })

  test('getHeroesByOwner devuelve el heroe por COMPAÑIA', () => {
    const owner = 'DC';
    const heros = getHeroesByOwner(owner);
    expect(heros).toEqual( heroes.filter(hero => hero.owner === owner)); 
  })
})
