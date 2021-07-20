import { retornaArreglo, usState } from "../../base/07-deses-arr";
describe('Tests for file from (base/07-deses-arr.js) ',()=>{
    test('testing retornoArreglo function, must return one string and one number',()=>{
        const [letras, numeros] = retornaArreglo();
        //expect(arr).toEqual(['ABC',123]);
        expect (letras).toBe('ABC');
        expect ( typeof letras).toBe('string');
        expect (numeros).toBe(123);
        expect ( typeof numeros).toBe('number');
    })
})