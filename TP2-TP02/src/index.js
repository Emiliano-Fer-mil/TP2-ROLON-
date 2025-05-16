// index.js

import express from 'express'
import usersRoutes from './routes/user.routes.js'

// declara la herramienta express para tener disponibles las funcionalidades con el nombre 'app'
const app = express()

//declara el puerto de entrada en el server local (8080)
const port = 8080

// middleware para convertir "automáticamente" json a ¿¿ string??
//parsea automáticamente en formato JSON
//en vez de a cada solicitud poner: "Content-Type: application/json" como lo vimos con módulo http
app.use(express.json())

// declarar el punto de entrada a las turas de la entidad "usuario"
app.use("/", usersRoutes)

// poner el server a "escuchar" en el puerto (8080)
const server = app.listen(port, () => (console.log(`server listen on ${port}`)))
server.on("error", (error) => { console.log("error: ", error) })

// aquí va código para correr las mismas funcionalidades de TP2-TP02 desde el index, solamente

// const usuarios = [
//     { id: 1, nombre: "a", apellido: "a", mail: "a@a.com.ar" },
//     { id: 2, nombre: "b", apellido: "b", mail: "b@b.com.ar" },
//     { id: 3, nombre: "c", apellido: "c", mail: "c@c.com.ar" },
//     { id: 4, nombre: "d", apellido: "d", mail: "d@c.com.ar" },
//     { id: 5, nombre: "e", apellido: "e", mail: "e@e.com.ar" },
//     { id: 6, nombre: "f", apellido: "f", mail: "f@f.com.ar" },
//     { id: 7, nombre: "g", apellido: "g", mail: "g@g.com.ar" }
// ]


// app.get("/usuarios", (req, res) => {
//     res.send(usuarios)
// })
// app.get("/usuarios/:id", (req, res) => {
//     const { id } = req.params
//     const usuarioGet = usuarios.find(u => u.id === parseInt(id))
//     if (usuarioGet) {
//         res.send(usuarioGet)
//     } else { res.status(400).send("no se encontró") }
// })

// app.post("/usuarios", (req, res) => {
//     const usuarioPost = req.body
//     usuarios.push(usuarioPost)
//     res.send(usuarioPost)
// })

// app.patch("/usuarios/:id", (req, res) => {
//     const { id } = req.params
//     const data = req.body
//     const index = usuarios.findIndex((e) => e.id === parseInt(id))
//     if (index >= 0) {
//         const usuarioPatch = { ...usuarios[index], ...data }
//         usuarios.splice(index, 1, usuarioPatch)
//         res.send(usuarioPatch)
//     } else {
//         res.status(400).send("no se encontró")
//     }
// })