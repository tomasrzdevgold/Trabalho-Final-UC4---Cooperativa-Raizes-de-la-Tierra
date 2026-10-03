"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registry = void 0;
class Registry {
    producers = [];
    foods = [];
    institutions = [];
    addFood(item) {
        this.foods.push(item);
        console.log(`
Register food sucessfully`);
    }
    addProducer(item) {
        this.producers.push(item);
        console.log(`
Register food sucessfully`);
    }
    addInstitution(item) {
        this.institutions.push(item);
        console.log(`
Register food sucessfully`);
    }
    list(type) {
        if (type === 1) {
            return this.producers;
        }
        else if (type === 2) {
            return this.foods;
        }
        else if (type === 3) {
            return this.institutions;
        }
        else {
            return Error;
        }
    }
}
exports.Registry = Registry;
