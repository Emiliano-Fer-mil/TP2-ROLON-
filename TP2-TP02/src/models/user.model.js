import fs from 'fs'
// user.model.js

// const usuarios = [
//     { id: 1, nombre: "a", apellido: "a", mail: "a@a.com.ar" },
//     { id: 2, nombre: "b", apellido: "b", mail: "b@b.com.ar" },
//     { id: 3, nombre: "c", apellido: "c", mail: "c@c.com.ar" },
//     { id: 4, nombre: "d", apellido: "d", mail: "d@c.com.ar" },
//     { id: 5, nombre: "e", apellido: "e", mail: "e@e.com.ar" },
//     { id: 6, nombre: "f", apellido: "f", mail: "f@f.com.ar" },
//     { id: 7, nombre: "g", apellido: "g", mail: "g@g.com.ar" }
// ]
const path = "./src/data/usuarios.json"

const saveUsuarios = async (usuariosArray) => {
  try {
    const contenido = JSON.stringify(usuariosArray, null, 2) // bonito
    await fs.promises.writeFile(path, contenido, "utf-8")
  } catch (err) {
    throw new Error("Error al guardar usuarios: " + err.message)
  }
}

const getUsers = async ()=>{
    try{
        const contenido = await fs.promises.readFile(path, "utf-8")
        const usuarios = JSON.parse(contenido)
        return usuarios
    } catch (err){
        throw new Error ("ERR: al leer archivo: " + err)
    }
}
const getUsersById = async (id) =>{
    return (await getUsers()).find((e)=> (e.id === id))
    
}

const postUser = async (user) =>{
    const usuariosActual = await getUsers()
    usuariosActual.push(user)
    await saveUsuarios(usuariosActual)
    return await getUsersById(user.id)
}
const patchUser = async(user)=>{
    const usuarios = await getUsers()
    const index = usuarios.findIndex(u => parseInt(user.id)===u.id)
    const userToPatch = usuarios[index]
    const userPatched = {...userToPatch, ...user}
    usuarios.splice(index,1,userPatched)
    await saveUsuarios(usuarios)
    return await getUsersById(userPatched.id)
}

export default {getUsers, getUsersById, postUser, patchUser}