const reverseString =require('./reverseString');

test("reverseString function exist",()=>{
    expect(reverseString).toBeDefined();
});

test("string reverse", ()=>{
    expect(reverseString("Hello")).toEqual('olleh');
})