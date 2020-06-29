import "@testing-library/jest-dom"
import { getHeroeById, getHeroesByOwner } from '../base/08-imp-exp'
import heroes from '../data/herores';

describe('Pruebas en fuinciones de  Heores', () => {
  test('should return a Herore', () => {
    const id = 1;
    const heroe = getHeroeById(id);
    
    const heroeData = heroes.find( h => h.id === id)
    expect( heroe ).toEqual(heroeData);
  })

  test('should return a undefined if Herore doesnt exists', () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  })
  
  test('should return arrar with dc heroes', () => {
    const owner = 'DC';
    const dc = getHeroesByOwner(owner);
    const heroesData = dc.filter( h => h.owner === owner)
    expect(dc).toEqual(heroesData);

    expect(dc).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ]);
    // console.log(dc);
  })

  test('should return arrar with dc heroes', () => {
    const owner = 'Marvel';
    const marvel = getHeroesByOwner(owner);
    expect(marvel).toEqual([
      { id: 2, name: 'Spiderman', owner: 'Marvel' },
      { id: 5, name: 'Wolverine', owner: 'Marvel' }
    ]);
  })

  test('should return ', () => {
    
  })
  
  
})
