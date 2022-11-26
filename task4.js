//Create 2 objects: animal and cat, add move property to animal object, 
//cat object must inherit move property from object animal
class animal{
    constructor (species, name, speed){
        this.species=species;
        this.name=name;
        this.speed=speed;
    }
    move(){
        console.log(`${this.name} moved 3 steps forward.`);
    }
}

class cat extends animal{
    constructor (species, name, speed){
        super(species, name, speed);
    }
}

const jerry = new cat('Feline',"Jerry",15);
console.log(jerry);
jerry.move();