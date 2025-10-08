const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3000;

/**
 * 1. all request body will be parsed - middleware
 * 2. first middleware will run and then request will reach to our route
 * 3. because of this middleware we do not need to parse the body in each route
 */
app.use(bodyParser.json());

let todos = [
    {
        id: '1',
        title: 'Task 1',
        completed: true
    },
    {
        id: '2',
        title: 'Task 2',
        completed: false
    }
]

app.all("/", (req, res) => {
    res.send("I'm up 🔥"); // send a response
})

// READ
app.get("/todos", (req, res) => {
    res.status(200).json(todos); // sends json response
});

// CREATE
app.post("/todos", (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    res.status(201).json({
        message: "new todo added"
    });
})


// UPDATE
app.put("/todos/:id", (req, res) => {
    const todoBody = req.body;
    const todoId = req.params.id; // it will be a string value

    const todoIdx = todos.findIndex((todo) => todo.id === todoId);
    if (todoIdx !== -1) {
        todos[todoIdx] = {
            id: todoId,
            ...todoBody
        }
        res.status(204);
    } else
        res.status(404).json({ message : "unable to find todo with given id" })
});

// DELETE
app.delete("/todos/:id", (req, res) => {
    const todoId = req.params.id;

    todos = todos.filter(todo => todo.id !== todoId);
    res.status(204);
})

app.listen(PORT, () => {
    console.log(`Server started on PORT:${PORT}`)
})