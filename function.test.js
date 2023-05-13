const functions = require("./function");

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

const nameCheck =()=> console.log("checking name....");

describe("checking names", ()=>{
    beforeEach(()=> nameCheck());

    test("user is jeff", () => {
      const user = "jeff";
      expect(user).toBe("jeff");
    });
})





//add
test("Adds 2+2 to equals 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// not
test("Adds 2+2 to NOT equals 4", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

//null
test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});

//undefine
test("should be undefined", () => {
  expect(functions.isUndefined()).toBe(undefined);
});

//falsy
test("should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

//truthy
test("should be truthy", () => {
  expect(functions.checkValue(2)).toBeTruthy();
});

// toEqual
test("should be steve paul", () => {
  expect(functions.createUser()).toEqual({
    firstName: "steve",
    lastName: "paul",
  });
});

//less than and greater than
test("should be under 1600", () => {
  const load1 = 400;
  const load2 = 500;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//regex
test("there should not be an I in the team", () => {
  expect("teami").not.toMatch(/I/); //case sensitive
});

//array
test("admin should be in username", () => {
  username = ["paul", "steve", "admin"];
  expect(username).toContain("admin");
});

//async
test("user fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

//async/await
test("user fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
