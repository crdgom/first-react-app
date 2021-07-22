import React from 'react';
import { render } from '@testing-library/react';
import CounterApp from "../CounterApp";
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Testing for CounterApp component',()=>{
    test('Must show default value defined in CounterApp component',()=>{
        const value = 100;
        const wrapper = shallow(<CounterApp value={value}/>);
        expect(wrapper).toMatchSnapshot();
    })
    test('must show the h2 whith value 100', ()=>{
        const value = '100';
        const wrapper = shallow(
            <CounterApp
                value = {value}
            />)
        const heading2 = wrapper.find('h2').text() 
        expect(heading2).toBe(value);
    })
})
