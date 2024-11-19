import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('pruebas en 09-promesas', () => {
  test('getHeroeById debe de retornar un heroe ', (done) => {
    
      const id = 1;
      
      getHeroeByIdAsync(id)
      .then((hero) => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            }); 
            done();
        });
  });
  test('getHeroeById debe de retornar error si el heroe no existe ', (done) => {
    
      const id = 100;
      
      getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toBeFalsy();
        done();
      })
      .catch(err => {
         expect(err).toBe('No se pudo encontrar el héroe ' + id)
        done();
      });
  });
  
})
