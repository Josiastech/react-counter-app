import "@testing-library/jest-dom"
import { getImagen } from '../base/11-async-await';


describe('Test with async await', () => {
  test('should return image URL', async() => {
    const url = await getImagen();
    console.log(url);
    

    // expect( typeof url ).toBe('string');
    expect(url.includes('https://')).toBe( true )
  })

})
