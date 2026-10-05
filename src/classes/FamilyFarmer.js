"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyFarmer = void 0;
const Producer_1 = require("./Producer");
class FamilyFarmer extends Producer_1.Producer {
    propertySize;
    constructor(name, cpf, quantityAliments, propertySize) {
        super(name, cpf, quantityAliments);
        this.propertySize = propertySize;
    }
    getPropertySize() {
        return this.propertySize;
    }
    setPropertySize(value) {
        this.propertySize = value;
    }
    present() {
        console.log(`
********************************
Type of producer : Family Farmer
********************************
Name: ${this.getName()}
Quantity of aliments produced: ${this.getQuantityAliments()}
Property Size: ${this.getPropertySize()}Ha`);
    }
}
exports.FamilyFarmer = FamilyFarmer;
