import React from 'react';
import { render } from '@testing-library/react';
import FirstApp from "../FirstApp";
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

describe('FirstApp module Test',()=>{
    /* test('Should return h1 string (Hola, soy Carlos)',()=>{
        const hello = 'Hola, soy Carlos';
        const {getByText} = render(<FirstApp hello={hello}/>);
        expect(getByText(hello)).toBeInTheDocument();

    }) */
    test('First real test with enzyme test library',()=>{
        const hello = 'Hola, soy Carlos'
        const wrapper = shallow(<FirstApp hello = {hello}/>)
        expect(wrapper).toMatchSnapshot();
    })
    test('must show the paragraph with the subtitle', ()=>{
        const hello = 'Hola, soy Carlos';
        const subtitle ='This is a subtitle'
        const wrapper = shallow(
            <FirstApp
                hello = {hello}
                subtitle={subtitle}
            />)
        const paragraph = wrapper.find('p').text() 
        expect(paragraph).toBe(subtitle);
    })
})