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


});