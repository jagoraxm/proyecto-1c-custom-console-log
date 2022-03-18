const log = require('./../index');

const { describe, it, beforeEach } = require("mocha");

var chai = require("chai"),
    expect = chai.expect,
    sinon = require("sinon"),
    sinonChai = require("sinon-chai");


chai.use(sinonChai);
const mensaje = 'Hola NPM';

describe('Test de las funciones', () => {
    beforeEach(function() {
        sinon.spy(console, 'log');
    });

    afterEach(function() {
        console.log.restore();
    });

    it('Funcion INFO', () => {
        log.info(mensaje);
        expect(console.log).to.be.called;
    });

    it('Funcion AVISO', () => {
        log.aviso(mensaje);
        expect(console.log).to.be.called;
    });

    it('Funcion OK', () => {
        log.ok(mensaje);
        expect(console.log).to.be.called;
    });

    it('Funcion ERROR', () => {
        log.error(mensaje);
        expect(console.log).to.be.called;
    });
});