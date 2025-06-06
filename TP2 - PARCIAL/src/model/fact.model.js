//fact.model.js

import fs from 'fs'

const path = "./src/data/facturas.json"

const getFact = async ()=>{
    try{
        const contenido = await fs.promises.readFile(path, "utf-8")
        const usuarios = JSON.parse(contenido)
        return usuarios
    } catch (err){
        throw new Error ("ERR: al leer archivo: " + err)
    }
}

const getFactByType = async (tipo)=>{
    const facturas = await getFact()
    const facturasPorTipo = []
    for (const factura of facturas){
        if (factura.tipo == tipo){
            facturasPorTipo.push(factura)
        }
    }
    return facturasPorTipo
}

const createFact = async (nuevaFactura) => {
    const facturas = await getFact()
  
    const ultimoId = facturas.length > 0 ? Math.max(...facturas.map(f => f.id)) : 0
    nuevaFactura.id = ultimoId + 1
    
    facturas.push(nuevaFactura)
    
    await fs.promises.writeFile(path, JSON.stringify(facturas, null, 2))
    return nuevaFactura
}

export default {getFact, getFactByType, createFact}