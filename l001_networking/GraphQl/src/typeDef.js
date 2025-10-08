export const typeDefs = `
# Defining the types - schema

type Response{
    code: Int!
    msg: String
}

type Book{
    id: ID!
    title: String!
    publishedYear: Int
    author: Author
}

type Author{
    id: ID!
    name: String!
    books: [Book]
}

# It defines what queries can client do to fetch data
type Query{
    books: [Book]
    authors: [Author]
    book(id: ID!): Book
    author(id: ID!): Author
}

# Defines queries which can modify data
type Mutation{
    addBook(title: String!, publishedYear: Int, authorId: ID!): Response
    deleteBook(id: ID!) : Response
}
`

/**
 * 1. `!` is used for mandatory thing, how we have mandatory and optional fields in TS like that only
 * 2. `#` inside string literal here will be used as a comment
 * 3. steps to create GraphQl server
 *      3.1 - define custom types
 *      3.2 - Define Query to get data
 *      3.3 - Define Mutation to update data
 *      3.4 - Define resolver for this things
 */