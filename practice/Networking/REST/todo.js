const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const PORT = 3001;

// setting middlewares
app.use(express.json());

app.use((req, res, next) => {
    res.removeHeader("X-Powered-By");
    next();
})

const todos = [{id: uuidv4().slice(0,6), title: "System design", description: "Complete networking module"}];

// valiating todo for post request
const isValidTodo = (todo) => {
    if (typeof todo === "object" && todo !== null && todo.constructor === Object) {
        const keys = Object.keys(todo);
        if (keys.length >= 1 && keys.length <= 2 && keys.includes("title")) {
            if (keys.length === 2 && !keys.includes("description"))
                return false;
            return true;
        }
    }

    return false;
}

// get all todos
app.get("/api/todos", (req, res) => {
    res.send(todos);
})

// add new todo
app.post("/api/todo", (req, res) => {
    try {
        const todo = req.body;
        if (!isValidTodo(todo))
            throw Error("Invalid Todo!");
        
        todos.push({
            id: uuidv4().slice(0,6),
            ...todo,
            completed: false
        })
        res.sendStatus(201);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

// delete existing todo
app.delete("/api/todo/:id", (req, res) => {
    const { id } = req.params;
    const idx = todos.findIndex((data) => data.id === id);
    if (idx !== -1) {
        todos.splice(idx, 1);
        res.sendStatus(204);
        return;
    }

    res.status(404).json({ error: "Resource not found!" });

})

// update todo
app.patch("/api/todo/:id", (req, res) => {
    const todoId = req.params.id;
    const body = req.body;

    const idx = todos.findIndex((todo) => todo.id === todoId);
    if (idx !== -1) {

    }
})


app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
})