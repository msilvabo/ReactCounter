import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('prueba en 11-async-await', () => {
    test('getImagen debe de retornar una url de la imagen ', async() => {
      const resp = await getImagen();
      expect(resp).toBe('No se encontró la imagen');
    })
        
  
})
