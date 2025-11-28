function crearContadorDaac() {
    let c = 0
    return function() {
        c++
        return c
    }
}
const contarDaac = crearContadorDaac()
console.log(contarDaac())
console.log(contarDaac())
