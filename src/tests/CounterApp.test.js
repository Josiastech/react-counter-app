import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';
import { Simulate } from 'react-dom/test-utils';

describe('Test Counter App', () => {
  let wrapper;
  
  beforeEach( () => {
    wrapper = shallow(<CounterApp />)  
  } )

  test('should show counter app', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('should render with default values', () => {
    const defaultValue = '10';

    const paragraphText = wrapper.find('h2').text();
    //console.log(paragraphText);

    expect(paragraphText).toBe(defaultValue);
  })

  test('should render with default 100', () => {
    const defaultValue = 100;
    const wrapper = shallow(<CounterApp value={defaultValue}/>)

    const paragraphText = wrapper.find('h2').text();

    expect(paragraphText).toBe('100');
  })

  test('should increment button+1', () => {
    wrapper.find('button').at(0).simulate('click');
    const paragraphText = wrapper.find('h2').text().trim();
    expect(paragraphText).toBe('11');
  })

  test('should decrement button11', () => {
    wrapper.find('button').at(2).simulate('click');
    const paragraphText = wrapper.find('h2').text().trim();
    expect(paragraphText).toBe('9');
  })

  test('should rest to 10', () => {
    wrapper.find('button').at(1).simulate('click');
    const paragraphText = wrapper.find('h2').text().trim();
    expect(paragraphText).toBe('10');
  })
  
  
})
