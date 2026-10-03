"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
class Food {
    name;
    category;
    quantityAvailableKg;
    producerManage;
    constructor(name, category, quantityAvailableKg, producerManage) {
        this.name = name;
        this.category = category;
        this.quantityAvailableKg = quantityAvailableKg;
        this.producerManage = producerManage;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
    getCategory() {
        return this.category;
    }
    setCategory(newCategory) {
        this.category = newCategory;
    }
    getQuantityAvailableKg() {
        return this.quantityAvailableKg;
    }
    getProducerManage() {
        return this.producerManage;
    }
    setProducerManage(newProducerManage) {
        this.producerManage = newProducerManage;
    }
    addQuantity(newQuantity) {
        if (newQuantity <= 0) {
            return `
The amount you want to add can't be zero or less than zero.`;
        }
        else {
            this.quantityAvailableKg += newQuantity;
            return `
Quantity added successfully.`;
        }
    }
    removeQuantity(value) {
        if (value > this.quantityAvailableKg) {
            return `
The amount you want to remove from stock can't be greater than the current stock quantity`;
        }
        else if (value <= 0) {
            return `
The amount you want to remove can't be zero or less than zero.`;
        }
        else {
            this.quantityAvailableKg -= value;
            return `
Quantity successfully removed.`;
        }
    }
    QuantityAvailable() {
        return `
Quantity Available: ${this.getQuantityAvailableKg}Kg`;
    }
    donate(quantity) {
        if (quantity > this.getQuantityAvailableKg()) {
            console.log();
        }
        else {
        }
    }
}
exports.Food = Food;
