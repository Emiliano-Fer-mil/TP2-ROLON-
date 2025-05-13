// user.servicer.js
import userModel from "../models/user.model.js"

const getUsers = async () => {
    const data = await userModel.getUsers()
    return data
}

const getUsersById = async (id) => {
    return await userModel.getUsersById(id)
}
const postUser = async (user) => {
    if (usuarioFormatoValido(user)
        && ! await idExiste(user)
    && ! await mailExiste(user)) {
        return await userModel.postUser(user)
    } else throw new Error("no cumple formato || id repetida || mail existente")
}
const patchUser = async (user) => {
    if (usuarioFormatoValido (user,["id"]) && await idExiste(user)){
        return await userModel.patchUser(user)
    } else throw new Error ("usuario no cumple formato o id no encontrada")
}
/**
 * Verifica si un objeto `user` cumple con la estructura y tipos requeridos.
 * @param {Object} user - Objeto a validar.
 * @param {string[]} [minKeys=["id", "nombre", "apellido"]] - Propiedades mínimas requeridas.
 * @returns {boolean} true si el objeto es válido, false en caso contrario.
 */
const usuarioFormatoValido = (user, minKeys = ["id", "nombre", "apellido"]) => {
    
    const tiposEsperados = {
        id: "number",
        nombre: "string",
        apellido: "string",
        mail: "string",
    }
    const alowedKeys = Object.keys(tiposEsperados)
    const userKeys = Object.keys(user)

    const isAlowed = userKeys.every(k => alowedKeys.includes(k))
    const isMin = minKeys.every(k => userKeys.includes(k))
    const tiposPermitidos = userKeys.every(k => typeof user[k] === tiposEsperados[k])

    return (isAlowed && isMin && tiposPermitidos)
}

const idExiste = async (user) => {
    const usuarios = await userModel.getUsers()
    const idExiste = usuarios.some(u => u.id === user.id)
    return (idExiste)
}
const mailExiste = async (user) => {
    const usuarios = await userModel.getUsers()
    const mailExiste = usuarios.some(u => u.mail === user.mail)
    return (mailExiste)

}


export default { getUsers, getUsersById, postUser, patchUser }