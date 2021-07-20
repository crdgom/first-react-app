import { getImagen } from "../../base/11-async-await";

describe('Testing 11-async-await.js file',()=>{
    test('Must retur GIPHY image URL', async()=>{
        const url = await getImagen();
        console.log(url);
        expect(url.includes('https://')).toBe(true);
        console.log(url);
    })
})