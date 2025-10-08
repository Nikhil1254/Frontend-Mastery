export const typeDefs = `
# Defining the types

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