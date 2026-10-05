export class Registry<T>{
    private producers : T[] = []
    private foods : T[] = []
    private institutions : T[] = []

    public addFood(item:T): void {
        this.foods.push(item)
        console.log(`
Register food sucessfully`)

    }

    public addProducer(item:T) :void {
        this.producers.push(item)
        console.log(`
Register producer sucessfully`)
    }

    public addInstitution(item:T) :void {
        this.institutions.push(item)
        console.log(`
Register institution sucessfully`)
    }

    public list(type : number):any{
        if(type === 1){
            return this.producers
        } else if(type === 2){
            return this.foods
        } else if (type === 3){
            return this.institutions
        } else {
            return Error
        }
    }


}