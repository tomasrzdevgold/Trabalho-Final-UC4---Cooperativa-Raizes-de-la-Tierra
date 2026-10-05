import { Institution } from "../classes/Institution";

export interface Donatable {
    donate(quantity: number,institutionToDonate: Institution): void
}