"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Institution = void 0;
class Institution {
    name;
    adress;
    numberOfPeopleServed;
    constructor(name, adress, numberOfPeopleServed) {
        this.name = name;
        this.adress = adress;
        this.numberOfPeopleServed = numberOfPeopleServed;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
    getAdress() {
        return this.adress;
    }
    setAdress(newAdress) {
        this.adress = newAdress;
    }
    getNumberOfPeopleServed() {
        return this.numberOfPeopleServed;
    }
    setNumberOfPeopleServed(newNumberOfPeopleServed) {
        this.numberOfPeopleServed = newNumberOfPeopleServed;
    }
    receivedFood() {
    }
}
exports.Institution = Institution;
