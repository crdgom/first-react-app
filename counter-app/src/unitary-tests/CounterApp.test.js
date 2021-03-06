import React from 'react';
import { render } from '@testing-library/react';
import CounterApp from "../CounterApp";
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Testing for CounterApp component',()=>{
    let wrapper = wrapper = shallow(<CounterApp />);
    beforeEach(()=>{
        wrapper = shallow(<CounterApp />);
    })

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

describe('Testing for CounterApp buttons (plus 1, reset & minus 1)',()=>{
    const wrapper = shallow(<CounterApp />);
    test('Should simulate the behavior of the button plus one (+1) ',()=>{
        
        const plusOne = wrapper.find('button').at(0).simulate('click');
        const heading2 = wrapper.find('h2').text()
        expect(heading2).toBe('101')

    })
    test('Should simulate the behavior of the button reset (Reset) ',()=>{
        
        const reset = wrapper.find('button').at(1).simulate('click');
        const heading2 = wrapper.find('h2').text()
        expect(heading2).toBe('100')
        


    })
    test('Should simulate the behavior of the button minus one (+1) ',()=>{
        
        const minusOne = wrapper.find('button').at(2).simulate('click');
        const heading2 = wrapper.find('h2').text()
        expect(heading2).toBe('99')

    })
})
