"use strict";
const Usuario = require("./usuario.js");

const Sistema = function () {
    this.usuarios = [];
    let id = 0;

    this.registrarUsuario = function (nombre, apellido) {
        id++;
        this.id = id;
        const usuario = new Usuario(nombre, apellido);
        this.usuarios.push(usuario);
        usuario.asignarNumero(crearNuevaLinea());
        usuario.asignarId(this.id);

    }

    const crearNuevaLinea = () => {
        const numeroLinea = 11*100000000 + Math.floor(Math.random() * 10000000);
        return verificarLineaEstaLibre(numeroLinea);
    }

    const verificarLineaEstaLibre = (numeroLinea) => {
        this.usuarios.forEach((usuario) => {
            if (usuario.numLinea.includes(numeroLinea)) {
                crearNuevaLinea();
            }
        });
        return numeroLinea;
    }
}

module.exports = Sistema;