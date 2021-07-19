import '@testing-library/jest-dom'
import {getHello} from '../../base/02-template-string';
describe('Tests for base/02-template-strings.js',()=>{
    test('Hello Method Test (getHello must return Hello & name)', ()=>{
        const name =  'Carlos'      
        const hello = getHello(name)

        expect(hello).toBe('Hello ' + name);
        console.log(hello)
    })
})

// getHello must return 'Hello Fernando' if hasn't argument

describe('Tests for base/02-template-strings.js',()=>{
    test('Hello Method Test (getHello must return Hello & fernando)', ()=>{     
        const hello = getHello()

        expect(hello).toBe('Hello fernando');
        console.log(hello)
    })
})