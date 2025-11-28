const personaDaac = {
    nombre: "Ana",
    edad: 22,
    presentarDaac() {
        return `${this.nombre} tiene ${this.edad} años`;
    }
};
console.log(personaDaac.presentarDaac());
