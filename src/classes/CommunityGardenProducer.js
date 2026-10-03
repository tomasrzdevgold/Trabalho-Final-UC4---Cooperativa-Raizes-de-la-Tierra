"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityGardenProducer = void 0;
const Producer_1 = require("./Producer");
class CommunityGardenProducer extends Producer_1.Producer {
    numberOfVolunteers;
    constructor(name, cpf, quantityAliments, numberOfVolunteers) {
        super(name, cpf, quantityAliments);
        this.numberOfVolunteers = numberOfVolunteers;
    }
    getNumberOfVolunteers() {
        return this.numberOfVolunteers;
    }
    setNumberOfVolunteers(value) {
        this.numberOfVolunteers = value;
    }
    present() {
        console.log(`
********************************************
Type of producer : Community Garden Producer
********************************************
Name: ${this.getName()}
Quantity of aliments producers: ${this.getQuantityAliments()}
Number of volunteers: ${this.getNumberOfVolunteers()}`);
    }
}
exports.CommunityGardenProducer = CommunityGardenProducer;
