import React from 'react';
import { render } from "@testing-library/react";
// import '@testing-library/jest-dom';
import FirstApp from '../FirstApp';



//ahora se van a llevar a cabo pruebas que son excluisvas de React
describe('Pruebas en <FirstApp />', () => {

  test('debe mostrar el msje "Hola Mundo" ', () => {
    //se debe renderizar el componente para poder realizar la prueba

    const saludo = "Hola Mundo";

    const { getByText } = render(<FirstApp saludo={saludo} />);

    //wrapper.getByText()

    expect(getByText(saludo)).toBeInTheDocument();

  })

});