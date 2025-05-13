// user.model.js

const usuarios = [
    { id: 1, nombre: "a", apellido: "a", mail: "a@a.com.ar" },
    { id: 2, nombre: "b", apellido: "b", mail: "b@b.com.ar" },
    { id: 3, nombre: "c", apellido: "c", mail: "c@c.com.ar" },
    { id: 4, nombre: "d", apellido: "d", mail: "d@c.com.ar" },
    { id: 5, nombre: "e", apellido: "e", mail: "e@e.com.ar" },
    { id: 6, nombre: "f", apellido: "f", mail: "f@f.com.ar" },
    { id: 7, nombre: "g", apellido: "g", mail: "g@g.com.ar" }
]
const getUsers = async ()=>{
    return await usuarios
}
const getUsersById = async (id) =>{
    return await usuarios.find((e)=> (e.id === id))
    
}

const postUser = async (user) =>{
    await usuarios.push(user)
    return await getUsersById(user.id)
}
const patchUser = async(user)=>{
    const index = await usuarios.findIndex(u => parseInt(user.id)===u.id)
    const userToPatch = await usuarios[index]
    const userPatched = {...userToPatch, ...user}
    await usuarios.splice(index,1,userPatched)
    return getUsersById(userPatched.id)
}

export default {getUsers, getUsersById, postUser, patchUser}