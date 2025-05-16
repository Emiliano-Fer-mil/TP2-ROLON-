// user.controller.js
// creas métodos, los call back de cada verbo.
// el método interactua con lo que viene de HTPP (tiene el reqres)

import userModel from "../models/user.model.js";
import userService from "../services/user.service.js";

const getUsers = async (req,res) =>{
    const data = await userService.getUsers()
    // por qué si están declaradas como constantes se las invoca como funciones getUsers()????
    //el valor de la constante getUsers es una función, en Javascript se puede ejecutar directamente
    if (data) {
        res.send (data)
    } else {
        res.send (400, ("no se pudieron encontrar datos de usuario"))
    }
}

const getUsersById = async (req,res) =>{
    const id = parseInt(req.params.id)
    if (isNaN(id) || id < 0){
        return res.status(400).send("ID invalido")
    }
    const usuario = await userService.getUsersById(id)
    if (usuario){
        res.send(usuario)
    } else {
        res.status(404).send("usuario no encontrado")
    }
}
const postUser = async(req,res)=>{
    const user = req.body
    try{
       const newUser = await userService.postUser(user)
       res.status(201).send(newUser)
    }catch (err){
        res.status(400).send(err.message)
    }
}
const patchUser = async (req,res)=>{
    const user = req.body
    try{
        const userPatched = await userService.patchUser(user)
        res.status(200).send(userPatched)
    } catch (err) {
        res.status(400).send(err.message)
    }
}
export default {getUsers, getUsersById, postUser, patchUser}