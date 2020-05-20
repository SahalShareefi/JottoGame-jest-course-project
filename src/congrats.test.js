import React from 'react';
import  { shallow } from 'enzyme';
//import EnzymeAdapter from 'enzyme-adapter-react-16'; // moved to the setupTests.js

import Congrats from './Congrats';
import { findByTestAttr, checkProps } from '../test/testUtils';

//Enzyme.configure({adapter: new EnzymeAdapter()}); //moved to the setupTests.js

const defaultProps = {success:false}; 

const setup = (props={},state=null) => {
	const setupProps = {...defaultProps, ...props};//that 'props' will override 'defaultProps' if 'props' exist
	return shallow(<Congrats {...setupProps}/>);
}

test('renders without error', () => {
	const wrapper = setup();
	const component = findByTestAttr(wrapper,'congrats-component');
	expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
	const wrapper = setup({success: false});
	const successComponent = findByTestAttr(wrapper,'congrats-component');
	expect(successComponent.text()).toBe('');
});

test('renders non-empty congrats message if `success` prop is true', () => {
	const wrapper = setup({success: true});
	const messageComponent = findByTestAttr(wrapper,'congrats-message');
	expect(messageComponent.text().length).not.toBe(0);
});

test('does not throw error with expected prop', () => {
	const expectedProps = {success: false};
	checkProps(Congrats, expectedProps);
});