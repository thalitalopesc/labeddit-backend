import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { UserRouter } from './router/UserRouter'
import { PostRouter } from './router/PostRouter'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.listen(Number(process.env.PORT) || 3003, () => {
    console.log(`Servidor rodando na porta ${Number(process.env.PORT) || 3003}`)
})

app.use("/users", UserRouter)
app.use("/posts", PostRouter)

app.get("/ping", (req, res) => {
    res.send("Pong!")
})
