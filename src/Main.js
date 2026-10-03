"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const ask = __importStar(require("readline-sync"));
const Food_1 = require("./classes/Food");
const Institution_1 = require("./classes/Institution");
const Registry_1 = require("./classes/Registry");
const FamilyFarmer_1 = require("./classes/FamilyFarmer");
const CommunityGardenProducer_1 = require("./classes/CommunityGardenProducer");
let foodRegistry = new Registry_1.Registry;
let institutionRegistry = new Registry_1.Registry;
let producerRegistry = new Registry_1.Registry;
let on = true;
while (on) {
    const menu = Number(ask.question(`
==========================================
    RAIZES DE LA TIERRA COOPERATIVE.INC
==========================================

[1] Register producer
[2] Register food
[3] Register institution
[4] List producers
[5] List food
[6] List institutions
[7] Make donation
[0] Exit

Choose an option: `));
    switch (menu) {
        case 1:
            console.clear();
            const typeProducer = Number(ask.question(`
====================================================
Whats is the type of producer do you wanna register?
====================================================

[1] Family Farmer
[2] Community Garden Producer

Choose an option: `));
            switch (typeProducer) {
                case 1:
                    console.clear();
                    let nameFamily = ask.question(`
Whats is the of the Family?: `);
                    let cpfFamily = ask.question(`
Whats is your CPF? (digit only numbers): `);
                    let quantityAlimentsFamily = Number(ask.question(`
Whats is the quantity of do you produce?:  `));
                    let propertySizeFamily = Number(ask.question(`
Whats is your property size?: `));
                    let producerFamilyFarmer = new FamilyFarmer_1.FamilyFarmer(nameFamily, cpfFamily, quantityAlimentsFamily, propertySizeFamily);
                    producerRegistry.addProducer(producerFamilyFarmer);
                    ask.question("Press ENTER to continue");
                    break;
                case 2:
                    console.clear();
                    let nameCommunity = ask.question(`
Whats is the name of the Community Garden?: `);
                    let cpfCommunity = ask.question(`
Whats is the CPF? (digit only numbers): `);
                    let quantityAlimentsCommunity = Number(ask.question(`
Whats is the quantity of do you produce?: `));
                    let numberOfVolunteersCommunity = Number(ask.question(`
Whats the number of volunteers?: `));
                    let producerCommunityGarden = new CommunityGardenProducer_1.CommunityGardenProducer(nameCommunity, cpfCommunity, quantityAlimentsCommunity, numberOfVolunteersCommunity);
                    producerRegistry.addProducer(producerCommunityGarden);
                    ask.question("Press ENTER to continue");
                    break;
                default:
                    console.log("Command not reconize...");
                    ask.question("Press ENTER to continue");
                    break;
            }
            break;
        case 2:
            console.clear();
            let nameFood = ask.question(`
Whats is the name of food?: `);
            let categoryFood = ask.question(`
Whats is the category of this food?: `).toLowerCase();
            let quantityAvailableKgFood = Number(ask.question(`
Whats is the quantity available?: `));
            let producerManageFood = ask.question(`
Who would be the producer responsible?: `);
            let food = new Food_1.Food(nameFood, categoryFood, quantityAvailableKgFood, producerManageFood);
            foodRegistry.addFood(food);
            ask.question("Press ENTER to continue");
            break;
        case 3:
            console.clear();
            let nameInstitution = ask.question(`
Whats the name of institution?: `);
            let adressInstitution = ask.question(`
Whats is the adress?: `);
            let numberOfPeopleServedInstitution = Number(ask.question(`
Whats is the quantity of person served?: `));
            let institution = new Institution_1.Institution(nameInstitution, adressInstitution, numberOfPeopleServedInstitution);
            institutionRegistry.addInstitution(institution);
            ask.question("Press ENTER to continue");
            break;
        case 4:
            console.clear();
            try {
                for (let producer of producerRegistry.list(1)) {
                    producer.present();
                }
            }
            catch (erro) {
                console.log("Could not complete the operation. Command not reconized...");
            }
            ask.question(`
Press ENTER to continue...`);
            break;
        case 5:
            console.clear();
            let textF = `
===============================
            FOODS
===============================`;
            try {
                for (let food of foodRegistry.list(2)) {
                    textF += `
===============================
Name: ${food.getName()}
Category: ${food.getCategory()}
QuantityAvailable: ${food.getQuantityAvailableKg()}Kg
Producer responsible: ${food.getProducerManage()}
===============================`;
                }
                console.log(textF);
            }
            catch (erro) {
                console.log(`Could not complete the operation.`);
            }
            ask.question(`
Press ENTER to continue...`);
            break;
        case 6:
            console.clear();
            let textI = `
====================================
        INSTITUTIONS
====================================`;
            try {
                for (let institution of institutionRegistry.list(3)) {
                    textI += `
====================================
Name: ${institution.getName()}
Adress: ${institution.getAdress()}
People Served: ${institution.getNumberOfPeopleServed()}
====================================`;
                }
            }
            catch (erro) {
                console.log(`Could not complete the operation.`);
            }
            ask.question(`
Press ENTER to continue...`);
            break;
        case 7:
            let institutionToDonate = ask.question(`
Whats is the instituion do you wanna donate: `);
            let foodToDonate = `
Foods availables to donate on the institution: ${institutionToDonate}`;
            for (let food of foodRegistry.list(2)) {
                if (food.getProducerManage() === institutionToDonate && food.getQuantityAvailableKg() > 0) {
                    foodToDonate += `
Name: ${food.getName()}
Category: ${food.getCategory()}
QuantityAvailable: ${food.getQuantityAvailableKg()}Kg `;
                }
            }
            console.log(foodToDonate);
            break;
        case 0:
            console.log("BYE!!!!!!!!!!!!!!!!");
            on = false;
            break;
        default:
            console.log("Command not reconize...");
            ask.question("Press ENTER to continue...");
            break;
    }
}
