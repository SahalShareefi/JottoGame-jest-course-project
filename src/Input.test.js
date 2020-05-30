import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

const setup = (initialState={}) => {
	const store = storeFactory(initialState);
	const wrapper = shallow(<Input store={store} />).dive().dive(); //here dive() will go down one level in 'Input'component (see the test powerShell)
	console.log(wrapper.debug());
	return wrapper;
}

setup();

describe('render', () =>{
	describe('word has not been guessed', () =>{
	
		test('renders component without error', () =>{

	});
		test('renders Input box', () =>{

	});
		test('renders submit button', () =>{

	});
  });

	describe('word has been guessed', () =>{
	
		test('renders component without error', () =>{

	});
		test('does not render Input box', () =>{

	});
		test('does not render submit button', () =>{

	});
  });
});
describe('update state', () =>{
	
 });
