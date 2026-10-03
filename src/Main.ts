import * as ask from "readline-sync";

import { Food } from "./classes/Food";
import { Institution } from "./classes/Institution";
import { Producer } from "./classes/Producer";
import { Registry } from "./classes/Registry"
import { FamilyFarmer } from "./classes/FamilyFarmer";
import { CommunityGardenProducer } from "./classes/CommunityGardenProducer";

let foodRegistry = new Registry<Food>
let institutionRegistry = new Registry<Institution>
let producerRegistry = new Registry<Producer>

let on : boolean = true
while(on){
    const menu : number = Number(ask.question(`
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

Choose an option: `))
    switch(menu){
        case 1:
            console.clear()

            const typeProducer : number = Number(ask.question(`
====================================================
Whats is the type of producer do you wanna register?
====================================================

[1] Family Farmer
[2] Community Garden Producer

Choose an option: `))

            switch(typeProducer){
                case 1:
                    console.clear()

                    let nameFamily : string = ask.question(`
Whats is the of the Family?: `)
                    let cpfFamily : string = ask.question(`
Whats is your CPF? (digit only numbers): `)
                    let quantityAlimentsFamily : number = Number(ask.question(`
Whats is the quantity of do you produce?:  `))
                    let propertySizeFamily : number = Number(ask.question(`
Whats is your property size?: `))

                    let producerFamilyFarmer : Producer = new FamilyFarmer(nameFamily,cpfFamily,quantityAlimentsFamily,propertySizeFamily)
                    producerRegistry.addProducer(producerFamilyFarmer)

                    ask.question("Press ENTER to continue")
                break;
                case 2:
                    console.clear()

                    let nameCommunity : string = ask.question(`
Whats is the name of the Community Garden?: `)
                    let cpfCommunity : string =  ask.question(`
Whats is the CPF? (digit only numbers): `)
                    let quantityAlimentsCommunity : number = Number(ask.question(`
Whats is the quantity of do you produce?: `))
                    let numberOfVolunteersCommunity : number = Number(ask.question(`
Whats the number of volunteers?: `))
                    
                    let producerCommunityGarden : Producer = new CommunityGardenProducer(nameCommunity,cpfCommunity,quantityAlimentsCommunity,numberOfVolunteersCommunity)
                    producerRegistry.addProducer(producerCommunityGarden)

                    ask.question("Press ENTER to continue")
                break;
                default:
                    console.log("Command not reconize...")
                    ask.question("Press ENTER to continue")
                break;
            }
        break;

        case 2:
            console.clear()

            let nameFood : string = ask.question(`
Whats is the name of food?: `)
            let categoryFood : string = ask.question(`
Whats is the category of this food?: `).toLowerCase()
            let quantityAvailableKgFood : number = Number(ask.question(`
Whats is the quantity available?: `))
            let producerManageFood : string = ask.question(`
Who would be the producer responsible?: `)

            let food : Food = new Food(nameFood,categoryFood,quantityAvailableKgFood,producerManageFood)
            foodRegistry.addFood(food)

            ask.question("Press ENTER to continue")
        break;

        case 3:
            console.clear()

            let nameInstitution : string = ask.question(`
Whats the name of institution?: `)
            let adressInstitution : string = ask.question(`
Whats is the adress?: `)
            let numberOfPeopleServedInstitution : number = Number(ask.question(`
Whats is the quantity of person served?: `))

            let institution : Institution = new Institution(nameInstitution,adressInstitution,numberOfPeopleServedInstitution)
            institutionRegistry.addInstitution(institution)

            ask.question("Press ENTER to continue")
        break;

        case 4:
            console.clear()

            try{
                for (let producer of producerRegistry.list(1)){
                    producer.present()
                }
                
            } catch(erro){
                console.log("Could not complete the operation. Command not reconized...");
            }

            ask.question(`
Press ENTER to continue...`)
        break;

        case 5:
            console.clear()

            let textF : string = `
===============================
            FOODS
===============================`
            try {
                for (let food of foodRegistry.list(2)){
                    textF += `
===============================
Name: ${food.getName()}
Category: ${food.getCategory()}
QuantityAvailable: ${food.getQuantityAvailableKg()}Kg
Producer responsible: ${food.getProducerManage()}
===============================`
                }

                console.log(textF)
            } catch (erro){
                console.log(`Could not complete the operation.`)
            }

            ask.question(`
Press ENTER to continue...`)
        break;

        case 6:
            console.clear()

            let textI : string = `
====================================
        INSTITUTIONS
====================================`

            try{
                for (let institution of institutionRegistry.list(3)){
                    textI += `
====================================
Name: ${institution.getName()}
Adress: ${institution.getAdress()}
People Served: ${institution.getNumberOfPeopleServed()}
====================================`
                }
            } catch(erro){
                console.log(`Could not complete the operation.`)
            }

            ask.question(`
Press ENTER to continue...`)
        break;

        case 7:
            let institutionToDonate : string = ask.question(`
Whats is the instituion do you wanna donate: `)

            let foodToDonate : string = `
Foods availables to donate on the institution: ${institutionToDonate}`

            for (let food of foodRegistry.list(2)){
                if(food.getProducerManage() === institutionToDonate && food.getQuantityAvailableKg() > 0){
                    foodToDonate += `
Name: ${food.getName()}
Category: ${food.getCategory()}
QuantityAvailable: ${food.getQuantityAvailableKg()}Kg `
                }
            }

            console.log(foodToDonate)

            
        break;


        case 0:
            console.log("BYE!!!!!!!!!!!!!!!!")
            on = false
        break;

        default:
        console.log("Command not reconize...")
        ask.question("Press ENTER to continue...")
        break;

    }
}
