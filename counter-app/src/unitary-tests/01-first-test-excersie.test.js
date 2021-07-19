describe('First test exercise', ()=>{
    test('strings must be identical', ()=>{
    const message = 'Hello World';
    
    const message2 = `Hello World`;
    
    expect(message).toBe(message2);
    
    })
})
