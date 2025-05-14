import fs from'fs'

const usuarios = [
    { id: 1, nombre: "a", apellido: "a", mail: "a@a.com.ar" },
    { id: 2, nombre: "b", apellido: "b", mail: "b@b.com.ar" },
    { id: 3, nombre: "c", apellido: "c", mail: "c@c.com.ar" },
    { id: 4, nombre: "d", apellido: "d", mail: "d@c.com.ar" },
    { id: 5, nombre: "e", apellido: "e", mail: "e@e.com.ar" },
    { id: 6, nombre: "f", apellido: "f", mail: "f@f.com.ar" },
    { id: 7, nombre: "g", apellido: "g", mail: "g@g.com.ar" }
]
const path = "./src/data/usuarios.json"
const dataJson = JSON.stringify(usuarios,null, 2)

const writeFile = async (path, dataJson)=> {
    try{
    await fs.promises.writeFile(path,dataJson,"utf-8")
    console.log ("archivo escrito ok")
    } catch {
        console.log("error al escribir archivo")
    }
}
writeFile(path,dataJson)