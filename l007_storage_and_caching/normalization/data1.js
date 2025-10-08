// problem 1

const state = {
    users: [
        {
            id: 1,
            name: "Alice",
            posts: [{ id: 101, title: "Post 1" }, { id: 102, title: "Post 2" }],
        },
        {
            id: 2,
            name: "Bob",
            posts: [
                { id: 103, title: "Post 3" }
            ]
        },
    ],
};


// normalized version 
const state1 = {
    users: {
        byIds: {
            1: {
                id: 1,
                name: "Alice",
            },
            2: {
                id: 2,
                name: "Bob",
            }
        },
        order: [1, 2]
    },
    posts: {
        byIds: {
            101: { id: 101, title: "Post 1" },
            102: { id: 102, title: "Post 2" },
            103: { id: 103, title: "Post 3" }
        },
        order: [101,102,103]
    }
}