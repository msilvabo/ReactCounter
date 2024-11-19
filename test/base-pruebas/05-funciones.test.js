import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('pruebas en 05-funciones', () => {
  test('getUser debe de retornar un objeto',() => {
    const testUser = {
                        uid: 'ABC123',
                        username: 'El_Papi1502'
                     };

    const user = getUser();
    expect(testUser).toEqual(user);                 
  });

  test('getUsuarioActivo debe retorgot un objeto', () => {
    const nombre = 'Carlos';
    const objeto = getUsuarioActivo(nombre);
    expect(objeto).toEqual({
        uid: 'ABC567',
        username: nombre
    });
  });
  
})
