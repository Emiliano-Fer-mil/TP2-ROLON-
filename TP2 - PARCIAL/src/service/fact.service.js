//fact.services.js

import factModel from "../model/fact.model.js"

const getFact = async () => {
    const data = await factModel.getFact()
    return data
}
const getFactByType = async(tipo) => {
    if (tipo === "A" || tipo === "B" || tipo === "C"){
    const data = await factModel.getFactByType(tipo)
    return data
    }else throw new Error ("tipo factura NO Válido")
} 

const createFact = async(data)=>{
    const nuevaFactura = await factModel.createFact(data)
    return nuevaFactura
}



export default {getFact, getFactByType, createFact}