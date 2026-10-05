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
let producerFamilyFarmerTest = new FamilyFarmer_1.FamilyFarmer("tomas", "12345", 50, 80);
producerRegistry.addProducer(producerFamilyFarmerTest);
let producerCommunityGardenTest = new CommunityGardenProducer_1.CommunityGardenProducer("el palmar", "12345", 100, 30);
producerRegistry.addProducer(producerCommunityGardenTest);
let batata = new Food_1.Food("batata", "carbohidratos", 20, "tomas");
foodRegistry.addFood(batata);
let cenoura = new Food_1.Food("cenoura", "legume", 40, "tomas");
foodRegistry.addFood(cenoura);
let cilantro = new Food_1.Food("cilantro", "legume", 120, "el palmar");
foodRegistry.addFood(cilantro);
let manzana = new Food_1.Food("manzana", "fruta", 200, "el palmar");
foodRegistry.addFood(manzana);
let institutionTest = new Institution_1.Institution("ifood", "rua cristo rei 552", 50);
institutionRegistry.addInstitution(institutionTest);
let on = true;
while (on) {
    console.clear();
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
[8] Show informations about one institution
[0] Exit

Choose an option: `));
    switch (menu) {
        case 1:
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
            console.log(textI);
            ask.question(`
Press ENTER to continue...`);
            break;
        case 7:
            console.clear();
            ////////////////////////////////////////////////////////////////////////////////
            if (institutionRegistry.list.length === 0) {
                console.log("Dont exist anything institution register");
            }
            else {
                let textIn = `
====================================
        INSTITUTIONS
====================================`;
                try {
                    for (let institution of institutionRegistry.list(3)) {
                        textIn += `
====================================
Name: ${institution.getName()}
====================================`;
                    }
                }
                catch (erro) {
                    console.log(`Could not complete the operation.`);
                }
                console.log(textIn);
                let institutionWannaDonate = ask.question(`
Whats is the instituion do you wanna donate: `);
                let instituionToDonate;
                try {
                    for (let institution of institutionRegistry.list(3)) {
                        if (institution.getName() === institutionWannaDonate) {
                            instituionToDonate = institution;
                        }
                    }
                }
                catch (erro) {
                    console.log(`Could not complete the operation.`);
                }
                ////////////////////////////////////////////////////////////////////////////////
                ////////////////////////////////////////////////////////////////////////////////
                console.clear();
                let textP = `
====================================
            Producers
====================================`;
                try {
                    for (let producer of producerRegistry.list(1)) {
                        textP += `
====================================
Name: ${producer.getName()}
====================================`;
                    }
                }
                catch (erro) {
                    console.log("Could not complete the operation. Command not reconized...");
                }
                console.log(textP);
                let producerToDonate = ask.question(`
Who is the producer do you wanna donate: `);
                ////////////////////////////////////////////////////////////////////////////////
                ////////////////////////////////////////////////////////////////////////////////
                console.clear();
                let foodAvailables = `
===================================================
Foods availables of producer: "${producerToDonate}"
===================================================`;
                for (let food of foodRegistry.list(2)) {
                    if (food.getProducerManage() === producerToDonate && food.getQuantityAvailableKg() > 0) {
                        foodAvailables += `
Name: ${food.getName()}
Category: ${food.getCategory()}
QuantityAvailable: ${food.getQuantityAvailableKg()}Kg 
`;
                    }
                }
                console.log(foodAvailables);
                let foodWannaDonate = ask.question(`
What is the food do you wanna donate: `);
                let foodToDonate;
                for (let food of foodRegistry.list(2)) {
                    if (food.getName() === foodWannaDonate) {
                        foodToDonate = food;
                    }
                }
                ////////////////////////////////////////////////////////////////////////////////
                ////////////////////////////////////////////////////////////////////////////////
                let quantityToDonate = Number(ask.question(`
What is the quantity do you wanna donate to the instition: "${institutionWannaDonate}"?: `));
                foodToDonate.donate(quantityToDonate, instituionToDonate);
                ask.question(`
Press ENTER to continue...`);
            }
            break;
        case 8:
            console.clear();
            if (institutionRegistry.list.length === 0) {
                console.log("Dont exist anything institution register");
            }
            else {
                let textInfo = `
====================================
        INSTITUTIONS
====================================`;
                try {
                    for (let institution of institutionRegistry.list(3)) {
                        textInfo += `
====================================
Name: ${institution.getName()}
====================================`;
                    }
                }
                catch (erro) {
                    console.log(`Could not complete the operation.`);
                }
                let showInformation = ask.question(textInfo + `
Write the option: `);
                console.clear();
                for (let instition of institutionRegistry.list(3)) {
                    if (instition.getName() === showInformation) {
                        let show = ``;
                        for (let food of instition.getFoodDonated()) {
                            show += `
===============================
Institution: ${showInformation}
===============================
Name food: ${food[0]}
Category food: ${food[1]}
Quantity: ${food[2]}Kg
Comes from producer: ${food[3]}`;
                        }
                        console.log(show);
                    }
                }
            }
            ask.question(`
Press ENTER to continue...`);
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
