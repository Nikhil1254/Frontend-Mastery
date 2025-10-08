import { v4 as uuidv4 } from "uuid"
const data = {
    authors: [{ id: "1", name: "Chirag Goel", bookIds: ["101", "102"] }, { id: "2", name: "Akshay Saini", bookIds: ["103"] }],
    books: [{ id: "101", title: "Namaste system design", publishedYear: 2024, authorId: "1" }, { id: "102", title: "Chakde React", publishedYear: 2023, authorId: "1" }, { id: "103", title: "Namaste NodeJs", publishedYear: 2024, authorId: "2" },]
}

export const resolvers = {
    Book: {
        author: (parent, args, context, info) => {
            // in each Author we are checking for our BookId
            return data.authors.find(author => author.bookIds.includes(parent.id))
        }
    },
    Author: {
        books: (parent, args, context, info) => {
            return data.books.filter(book => parent.bookIds.includes(book.id));
        }
    },
    Query: {
        books: (parent, args, context, info) => {
            return data.books;
        },
        authors: (parent, args, context, info) => {
            return data.authors;
        },
        book: (parent, args, context, info) => {
            const bookId = args.id;
            return data.books.find(book => book.id === bookId);
        },
        author: (parent, args, context, info) => {
            const authorId = args.id;
            return data.authors.find(author => author.id === authorId);
        }
    },
    Mutation: {
        addBook: (parent, args, context, info) => {
            const book = { id: uuidv4().slice(0, 6), ...args };
            data.books.push(book);
            data.authors.forEach(author => {
                if (author.id === book.authorId)
                    author.bookIds.push(book.id);
            })
            return { code: 201 };
        },
        deleteBook: (parent, args, context, info) => {
            const { id: bookId } = args;
            const bookIdx = data.books.findIndex(book => book.id === bookId);
            data.books.splice(bookIdx, 1);
            let flag = false;
            data.authors.forEach(author => {
                if (author.bookIds.includes(bookId)) {
                    author.bookIds = author.bookIds.filter(id => id !== bookId)
                    flag = true;
                }

            })

            if (flag)
                return { code: 204 };
            return { code: 404, msg: `Book with Id: ${bookId} not found!` };
        }
    }
}