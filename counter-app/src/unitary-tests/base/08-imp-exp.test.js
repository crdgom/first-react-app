import {getHeroeById, getHeroesByOwner} from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Tests for file from (base/08-imp-exp.js)',()=>{
    test('shuld return a hero by id',()=>{
        const id = 1;
        const heroe=getHeroeById(id);
        console.log(heroe)
        const  heroeData =  heroes.find(h=>h.id === id);
        expect(heroe).toEqual(heroeData);

    })
    test('shuld return undefine if hero by id dosent exist',()=>{
        const id = 100;
        const heroe=getHeroeById(id);
        expect(heroe).toBe(undefined);

    })
})

describe('Tests for file from (base/08-imp-exp.js)',()=>{
    test('Test case must retun an array with DC heroes',()=>{
        const owner = 'DC'
        const dcHeroes=getHeroesByOwner(owner);
        const heroUniverse=dcHeroes.filter(u=>u.owner === owner);
        expect(dcHeroes).toEqual(heroUniverse);
        console.log(heroUniverse)
        console.log(dcHeroes)
    })
    test('Test case must retun an array with DC heroes',()=>{
        const owner = 'Marvel'
        const marvelHeroes=getHeroesByOwner(owner);
        const heroUniverse=marvelHeroes.filter(u=>u.owner === owner);
        expect(marvelHeroes).toEqual(heroUniverse);
        console.log(heroUniverse)
        console.log(marvelHeroes)
        expect(heroUniverse).toHaveLength(2)
    })
})