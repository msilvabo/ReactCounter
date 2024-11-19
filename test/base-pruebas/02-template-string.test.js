import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string.', () => {
  test('getSaludo debe de retornar Hola Mundo',()=>{
    const nombre = 'Fernando';
    const message = getSaludo(nombre);

    expect (message).toBe(`Hola ${nombre}`);
  }); 
})
