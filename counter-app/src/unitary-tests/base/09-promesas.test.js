import {getHeroeByIdAsync} from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Tets whit promisses',()=>{
    test('Must return a hero in asynchronous',(done)=>{
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe=>{
                expect (heroe).toBe(heroes[0]);
                done();
            })
    })
    test('Must trigger the error in the catch',(done)=>{
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(error=>{
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            })
    })
})