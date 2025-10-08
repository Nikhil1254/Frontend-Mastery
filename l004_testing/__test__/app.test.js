const { sortByAge } = require("../src/app.js");

const users = [{ name: "Ramesh", age: 54 }, { name: "Omkar", age: 8 }, { name: "Sujit", age: 21 }];
// test case - (unit test case)
test("Testing first user afetr sorting is correct", () => {
    const sortedUsers = sortByAge(users);

    expect(sortedUsers[0].name).toBe("Omkar");
});

test("Testing last element after sorting is correct", () => {
    const sortedUsers = sortByAge(users);

    expect(sortedUsers[2].name).toBe("Ramesh");
})


test("Testing length of array after sorting", () => {
    const sortedUsers = sortByAge(users);

    expect(sortedUsers).toHaveLength(3);
})