class UsuarioDaac {
    constructor(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
    }
    infoDaac() {
        return `${this.nombre} - ${this.correo}`;
    }
}
const u1 = new UsuarioDaac("Carlos","c@gmail.com");
console.log(u1.infoDaac());
