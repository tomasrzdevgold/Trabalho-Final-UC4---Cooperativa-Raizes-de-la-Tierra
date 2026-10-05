export class Institution{
    private name: string;
    private adress: string;
    private numberOfPeopleServed: number;
    private foodDonated : any[] = []

	public constructor(name: string, adress: string, numberOfPeopleServed: number) {
		this.name = name;
		this.adress = adress;
		this.numberOfPeopleServed = numberOfPeopleServed;
	}

    public getName(): string {
        return this.name;
    }

    public setName(newName: string) {
        this.name = newName;
    }

    public getAdress(): string {
        return this.adress;
    }

    public setAdress(newAdress: string) {
        this.adress = newAdress;
    }

    public getNumberOfPeopleServed(): number {
        return this.numberOfPeopleServed;
    }

    public setNumberOfPeopleServed(newNumberOfPeopleServed: number) {
        this.numberOfPeopleServed = newNumberOfPeopleServed;
    }

    public getFoodDonated():any[]{
        return this.foodDonated
    }

    public receivedFood(array : any[]):void{
        this.foodDonated.push(array)
        console.log(`
Food recived, thanks!!!`)
    }
}