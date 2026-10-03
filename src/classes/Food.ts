import { Donatable } from "../interfaces/Donatable";

export class Food implements Donatable{
    private name : string;
    private category : string;
    private quantityAvailableKg : number;
    private producerManage : string;

	public constructor(name: string, category: string, quantityAvailableKg: number, producerManage: string) {
		this.name = name;
		this.category = category;
		this.quantityAvailableKg = quantityAvailableKg;
		this.producerManage = producerManage;
	}

    public getName(): string {
        return this.name;
    }

    public setName(newName: string) {
        this.name = newName;
    }

    public getCategory(): string {
        return this.category;
    }

    public setCategory(newCategory: string) {
        this.category = newCategory;
    }

    public getQuantityAvailableKg(): number {
        return this.quantityAvailableKg;
    }

    public getProducerManage(): string {
        return this.producerManage;
    }

    public setProducerManage(newProducerManage: string) {
        this.producerManage = newProducerManage;
    }

    public addQuantity(newQuantity: number): string {
        if(newQuantity <= 0){
            return `
The amount you want to add can't be zero or less than zero.`
        } else {
            this.quantityAvailableKg += newQuantity
            return `
Quantity added successfully.`
        }
    }

    public removeQuantity(value : number) : string{
        if(value > this.quantityAvailableKg){
            return `
The amount you want to remove from stock can't be greater than the current stock quantity`
        } else if(value <= 0){
            return `
The amount you want to remove can't be zero or less than zero.`
        }else{
            this.quantityAvailableKg -= value
            return `
Quantity successfully removed.`
        }
    }

    public QuantityAvailable() : string{
        return`
Quantity Available: ${this.getQuantityAvailableKg}Kg`
    }

    public donate(quantity: number): void {
        if(quantity > this.getQuantityAvailableKg()){
            console.log()
        }else{

        }
    }


}