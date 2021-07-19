import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Test for file 05-funciones in base directory',()=>{
    test('Testing if function getUser works',()=>{
        const testuser = {
            uid:'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        console.log(user);
        expect(user).toStrictEqual(testuser)
    })
    test('', ()=> {
        const nombre = 'juna'
        const user = getUsuarioActivo(nombre);
        console.log(user)
        expect(user).toEqual({
            uid:'ABC567',
            username: nombre
        });
    })
})