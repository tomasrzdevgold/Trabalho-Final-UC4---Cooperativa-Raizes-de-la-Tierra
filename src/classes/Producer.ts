export abstract class Producer {
    private name : string;
    private cpf : string;
    private quantityAliments : number;


	public constructor(name: string, cpf: string, quantityAliments: number) {
		this.name = name;
		this.cpf = cpf;
		this.quantityAliments = quantityAliments;
	}

    public getName(): string {
        return this.name;
    }
    public setName(newName: string) : void {
        this.name = newName;
    }
    public getCpf(): string {
        return this.cpf;
    }
    public setCpf(newCpf: string): void {
        this.cpf = newCpf;
    }
    public getQuantityAliments(): number {
        return this.quantityAliments;
    }
    public setQuantityAliments(newQuantityAliments: number) : void{
        this.quantityAliments = newQuantityAliments;
    }

    public abstract present(): void
}