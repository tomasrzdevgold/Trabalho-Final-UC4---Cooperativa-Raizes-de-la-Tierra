"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producer = void 0;
class Producer {
    name;
    cpf;
    quantityAliments;
    constructor(name, cpf, quantityAliments) {
        this.name = name;
        this.cpf = cpf;
        this.quantityAliments = quantityAliments;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(newCpf) {
        this.cpf = newCpf;
    }
    getQuantityAliments() {
        return this.quantityAliments;
    }
    setQuantityAliments(newQuantityAliments) {
        this.quantityAliments = newQuantityAliments;
    }
}
exports.Producer = Producer;
