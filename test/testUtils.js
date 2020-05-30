import React from 'react';
import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import rootReducer from '../src/reducers'

export const findByTestAttr = (wrapper, val) => {
	return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
	const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name); //the argument of the function (Congrats Component propTypes 'existed there', the props that will be supplied e.g. "{ name: 'Julia' }", we r testing the properties like this: 'prop', Congrats Component name);
	expect(propError).toBeUndefined();
}

export const storeFactory = (initialState) => {  // we want to create store for testing that matchs the configuration of the atual store
	return createStore(rootReducer, initialState);
}
