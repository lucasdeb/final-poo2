"use strict";

const Usuario = function (nombre, apellido) {
    this.id = null;
    this.nombre = nombre;
    this.apellido = apellido;
    this.numLinea = [];

    this.asignarNumero = function (numeroLinea) {
        this.numLinea.push(numeroLinea);
    }

    this.asignarId = function (id) {
        this.id = id;
    }

    this.nombreCompleto = function () {
        return this.nombre + " " + this.apellido;
    }

}

module.exports = Usuario;


