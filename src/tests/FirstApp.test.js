import React from 'react';
import FirstApp from '../FirstApp';
import { shallow } from 'enzyme';



//ahora se van a llevar a cabo pruebas que son excluisvas de React
describe('Pruebas en <FirstApp />', () => {

  test('should show <FirstApp /> correctly', () => {
    const saludo = 'Hola Mundo';
    const wrapper = shallow(<FirstApp saludo={saludo} />)
    expect(wrapper).toMatchSnapshot();
  })

  test('should show subtitle from props', () => {
    const saludo = 'Hola Mundo';
    const subTitulo = 'Soy un subtitulo';

    const wrapper = shallow(
      <FirstApp 
        saludo= {saludo } 
        subtitulo= {subTitulo } 
      />
    );

    const paragraphText = wrapper.find('p').text();
    //console.log(paragraphText);

    expect(paragraphText).toBe(subTitulo);


  });


});