// fact.controller.ja

import factService from "../service/fact.service.js"

const getFact = async (req, res) => {
    const data = await factService.getFact()
    if (data) {
        res.send(data)
    } else {
        res.status(400).send("no se pudieron encontrar facturas")
    }
}

const getFactByType = async (req, res) => {
    const tipo = req.params.tipo
    try {
        const data = await factService.getFactByType(tipo)
        res.send(data)
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }

}

const createFact = async (req, res) => {
    try {
        const data = req.body
        const nuevaFactura = await factService.createFact(data)
        res.status(200).send(nuevaFactura)
    } catch (error) {
        console.error(error)
        res.status(400).send(error)
    }
}
export default { getFact, getFactByType, createFact }