"use strict";
const Usuario = require("../src/usuario.js");
const Sistema = require("../src/sistema.js");


describe("Creacion de usuario", () => {
    test("Return de un numero de linea para el cliente.", () => {
        const usuario = new Usuario("Lucas", "Debarbieri");

        usuario.asignarNumero(123456789);

        expect(usuario.numLinea[0]).toEqual(expect.any(Number));
        expect(usuario.nombreCompleto()).toBe("Lucas Debarbieri");
    })

    test("Asigna un numero random de linea.", () => {
        const sistema = new Sistema();
        sistema.registrarUsuario("Lucas", "Debarbieri");

        expect(sistema.usuarios[0].numLinea[0]).toEqual(expect.any(Number));
    })

    test("Asigna un id con incremento por usuario.", () => {
        const sistema = new Sistema();
        sistema.registrarUsuario("Lucas", "Debarbieri");
        sistema.registrarUsuario("Juan", "Perez");
        
        expect(sistema.usuarios[0].id).toBe(1);
        expect(sistema.usuarios[1].id).toBe(2);
    })

    test("Nombre completo del usuario.", () => {
        const usuario = new Usuario("Lucas", "Debarbieri");

        expect(usuario.nombreCompleto()).toBe("Lucas Debarbieri");
    })
})