import '@testing-library/jest-dom';
import { getSaludo } from "../base/02-template-string";

describe('Pruebas en 02-template-string', () => {
  test('getSaludoi debe retornar hola Josias', () => {
    const nombre = 'Josias';
    const saludo = getSaludo(nombre);
    expect(saludo).toBe('Hola ' + nombre);
  })

  // getSAludo debe retonar valor por default si no hay argumento
  test('debe retornar Hola Emanuel si no hay argumento', () => {
    const saludo = getSaludo();
    expect(saludo).toBe('Hola Emanuel');
  })
})