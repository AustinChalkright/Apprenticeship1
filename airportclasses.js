class Bag {
    constructor(weight) {
        this.weight = weight

    }
    isOverLimit(){
    if (this.weight>25){
        throw new Error('Bag is over limit')       
    }
}
}
try{
    const bag = new Bag(17)
}catch{
    alert('Error')
}

class Passenger{
    bags = [];
    constructor(name, passportNumber, seatNumber){
        this.name = name;
        this.passportNumber = passportNumber;
        this.seatNumber = seatNumber;
    }
    addBag(Bag){
        this.bags.push(Bag);
    }
}

const austin = new Passenger('Austin Chalkright', "123456789", "16D");
const austinsCabinBag = new Bag(10);
const austinsHullBag = new Bag(22);

if(!austinsCabinBag.isOverLimit()){

    austin.addBag(austinsCabinBag);
}
if(!austinsHullBag.isOverLimit()){

    austin.addBag(austinsHullBag);
}
