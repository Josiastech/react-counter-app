import "@testing-library/jest-dom"
import { getHeroeByIdAsync } from "../base/09-promesas"
import heroes from "../data/herores";

describe('Return with promises', () => {
  test('should return an heroe async', (done) => {
    const id = 1;
    getHeroeByIdAsync(id)
    .then( heroe => {
      expect(heroe).toBe(heroes[0])
      // expect(true).toBe(false);
      done();
    })
  })

  test('should return error if heroe doesnt exists', (done) => {
    const id = 10;
    getHeroeByIdAsync(id)
    .catch(error => {
      expect(error).toBe('No se pudo encontrar el héroe');
      done();
    })
  })
  
  
})
