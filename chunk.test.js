const chunkArray = require('./chunk');

test("chunkArray function exist",()=>{
    expect(chunkArray).toBeDefined();
})

test("chunk an Array of 10 values with length of 2",()=>{
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const length =2;
    const chunkArr=  chunkArray(num, length)
    expect(chunkArr).toEqual([[1,2],[3,4],[5,6],[7,8],[9,10]]);
})