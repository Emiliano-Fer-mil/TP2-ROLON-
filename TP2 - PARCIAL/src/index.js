//index.js

import express from 'express'
import factRoute from './route/fact.route.js'
//import usersRoutes from './routes/user.routes.js'

// declara la herramienta express para tener disponibles las funcionalidades con el nombre 'app'
const app = express()

//declara el puerto de entrada en el server local (8080)
const port = 8080

// middleware para convertir "automáticamente" json a ¿¿ string??
app.use(express.json())

// declarar el punto de entrada a las turas de la entidad "usuario"
app.use("/", factRoute)

// poner el server a "escuchar" en el puerto (8080)
const server = app.listen(port, () => (console.log(`server listen on ${port}`)))
server.on("error", (error) => { console.log("error: ", error) })
