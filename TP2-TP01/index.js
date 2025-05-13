import fs from 'fs';

const arrayOri = [2, 10, "a", 4, "b", 6, "d", true, "e", 9, 1, "z", 12, "r", "c", false]

async function filtrar(array, condicion) {
    try {
        const a = array.filter(e => typeof e === condicion)
        if (a.length > 0) {
            a.sort((a, b) => a - b)
            console.log(a)
            await fs.promises.writeFile("./log.txt", a.toString())
        } else throw new Error("No hay valores de ese tipo")
    } catch (err) { console.log(`error: ${err}`) }
}

filtrar(arrayOri, "number")
