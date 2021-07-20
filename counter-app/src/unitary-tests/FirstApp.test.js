import React from 'react';
import { render } from '@testing-library/react';
import FirstApp from "../FirstApp";

describe('FirstApp module Test',()=>{
    test('Should return h1 string (Hola, soy Carlos)',()=>{
        const hello = 'Hola, soy Carlos';
        const {getByText} = render(<FirstApp hello={hello}/>);
        expect(getByText(hello)).toBeInTheDocument();

    })
})