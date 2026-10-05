import { Producer } from "./Producer";

export class FamilyFarmer extends Producer{

    private propertySize : number;

    public constructor(name: string, cpf: string, quantityAliments: number, propertySize : number) {
        super(name, cpf, quantityAliments)
        this.propertySize = propertySize
      }

    public getPropertySize():number{
        return this.propertySize
    }

    public setPropertySize(value:number):void {
        this.propertySize = value
    }
    
    public present(): void {
        console.log(`
********************************
Type of producer : Family Farmer
********************************
Name: ${this.getName()}
Quantity of aliments produced: ${this.getQuantityAliments()}
Property Size: ${this.getPropertySize()}Ha`)
    }
}