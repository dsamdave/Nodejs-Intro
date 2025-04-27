
const express = require("express")

const app = express()

// Middleware
// Body Parser
app.use(express.json())

const PORT = process.env.PORT || 8000

app.listen(PORT, ()=>{
    console.log(`Server started running on ${PORT}`)
})

// GET POST PUT PATCH DELETE
// Endpoints /All-user /user /edit-profile /edit-user-profile


// body, params, query

// API
app.get("/", (request, response)=>{

    response.send("Welcome to carrerex server")
})


app.get("/users", (request, response)=>{

    const users = [
        {
            firstName: "David"
        },
        {
            firstName: "David"
        },
    ]

    // response.send("List of all users")

    // json

    // response.send(12345678909876543)
    response.json(users)
})


app.post("/add-user", (req, res)=>{

    const newUser = req.body


    res.json({
        message: "User saved successful",
        newUser
    })
})


