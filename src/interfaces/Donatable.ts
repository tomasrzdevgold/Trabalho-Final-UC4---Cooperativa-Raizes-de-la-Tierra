import { Producer } from "../classes/Producer";

export interface Donatable {
    donate(quantity: number,institutionToDonate: Producer): void
}