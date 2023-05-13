const functions = require("./swapiGetter");

// jest.mock("axios")
test("should return a name", async () => {
  const result = await functions.swapiGetter(1);
  console.log(result);
  expect(result).toBe("Luke Skywalker");
});



