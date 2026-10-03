import { Producer } from "./Producer";

export class CommunityGardenProducer extends Producer{
    private numberOfVolunteers : number;

    public constructor(name: string, cpf: string, quantityAliments: number, numberOfVolunteers : number) {
        super(name, cpf, quantityAliments)
        this.numberOfVolunteers = numberOfVolunteers
      }

    public getNumberOfVolunteers():number{
        return this.numberOfVolunteers
    }

    public setNumberOfVolunteers(value:number):void {
        this.numberOfVolunteers = value
    }
        
    public present(): void {
        console.log(`
********************************************
Type of producer : Community Garden Producer
********************************************
Name: ${this.getName()}
Quantity of aliments producers: ${this.getQuantityAliments()}
Number of volunteers: ${this.getNumberOfVolunteers()}`)
    }
}