// problem 2
const state = {
    users: [
        { id: 1, name: 'Alice', posts: [{ id: 101, title: 'Post 1', comments: [{ id: 201, text: 'Comment 1' }] }] },
        { id: 2, name: 'Bob', posts: [{ id: 102, title: 'Post 2', comments: [{ id: 202, text: 'Comment 2' }] }] },
    ],
    tags: [
        { id: 301, name: 'Tech', posts: [{ id: 101 }, { id: 102 }] },
        { id: 302, name: 'Travel', posts: [{ id: 102 }] },
    ],
};

// normalized version
const state1 = {
    users: {
        byIds: {
            1: { id: 1, name: 'Alice' },
            2: { id: 2, name: 'Bob' }
        },
        orders: [1, 2]
    },
    posts: {
        byIds: {
            101: { id: 101, title: 'Post 1', userId: 1 },
            102: { id: 102, title: 'Post 2', userId: 2 }
        },
        order: [101, 102]
    },
    comments: {
        byIds: {
            201: { id: 201, text: 'Comment 1', postId: 101 },
            202: { id: 202, text: 'Comment 2', postId: 102 }
        }
    },
    tags: {
        byIds: {
            301: { id: 301, name: 'Tech', posts: [101, 102] },
            302: { id: 302, name: 'Travel', posts: [102] }
        }
    }
}