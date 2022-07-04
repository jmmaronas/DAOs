const express = require('express')
const productsRouter = require('./routers/productsRouter')
const usersRouter = require('./routers/usersRouter')
const connectDB=require('./mongoDB')

const app = express()
console.log(process.env.STORAGE)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
connectDB()

app.use('/api/products', productsRouter)
app.use('/api/users', usersRouter)

const PORT = 8080

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))