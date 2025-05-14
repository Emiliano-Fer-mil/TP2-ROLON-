import fs from 'fs';

const arrayOri = [2, 10, "a", 4, "b", 6, "d", true, "e", 9, 1, "z", 12, "r", "c", false]

async function filtrar(array, condicion) {
    try {
        const filtered = array.filter(e => typeof e === condicion)
        if (filtered.length > 0) {
            if (typeof filtered[0] !== "number") {
                filtered.sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
            }
            else {
                filtered.sort((a, b) => a - b)
            }
            console.log(filtered)
            await fs.promises.writeFile("./log.txt", filtered.toString())
        } else throw new Error("No hay valores de ese tipo")
    } catch (err) { console.log(`error: ${err.message}`) }
}

filtrar(arrayOri, "number")
