test('should be equal string', () => {
  const mensaje = 'Hola Mundo';
  
  // 2. Estimulo
  const mensaje2 = `Hola Mundo`;

  // 3. observar comportamiento
  expect( mensaje ).toBe( mensaje2 );
  
})
