import "@testing-library/jest-dom"
import { retornaArreglo } from "../base/07-deses-arr";

describe('pruebas en desestructuracion', () => {
  test('should return string', () => {
    const arr = retornaArreglo();

    expect(arr).toEqual(['ABC', 123]);
    
  })  
})
