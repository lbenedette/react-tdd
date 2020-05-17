import React from 'react';
import { mount } from "enzyme";
import { HelloWorld } from './HelloWorld';

describe('HelloWorld Test', () => {
    it('should show hello world message', () => {
        const wrapper = mount(<HelloWorld name='Rebeca'></HelloWorld>)

        expect(wrapper.text()).toEqual('Hello World, Rebeca, count: 0');

        wrapper.simulate('click');

        expect(wrapper.text()).toEqual('Hello World, Rebeca, count: 1');
    });
})